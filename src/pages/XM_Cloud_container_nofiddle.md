---
title: The XM Cloud container - don't fiddle (too much) with it...
published: true
date: '2022-10-16'
spoiler: A failed experiment to make a local XM Cloud development environment known to the outside world.
description: XM Cloud dev env to outside world? It failed.
tags: xmcloud, docker, sitecore
canonical_url: https://www.sergevandenoever.nl/... - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
This post is about a failed experiment, but I still wanted to write it down for you, the reader, to prevent you from making the same mistakes that I did - it will save you a lot of hours. But still by reading this post you will maybe learn some new tricks that you can use in your development practices.

## Introduction

We can already run Sitecore XM/XP for quite some time on our local machine on Docker containers using Docker Desktop for Windows and Docker Compose. I did not really had the ability to join the crowd in doing this, because my former laptop, A Microsoft SurfaceBook 2 equiped with 16GB of memory, refused to work in a stable way using Windows containers. And even if I was using Linux dev containers with VSCode (my favorite way of utilizing a dev environment) it was sounding like the Boeing 787-10 Airliner I'm currently in while typing this post, flying from Amsterdam Schiphol to Chicago to attend the Sitecore Symposium ans the Sitecore MVP summit. But those days are gone. When my machine started giving multiple blue-screens a day when running Docker, I could move on to a "second-hand" Dell XPS Core i7 9th Gen with 32GB from a colleague who left the company (Thanks Loic:-)).

So time to dive into the Sitecore Docker world. But my goal is not to get my Sitecore XM or XP environment running in Docker containers, but to be able to play with Sitecore XM Cloud, as long as I don't have the possibility to create XM Cloud projects on https://sitecorecloud.io because I don't have access to an organization.

## Working with XM Cloud Docker scripts

When I see colleagues working with Sitecore and Docker I see them tweaking and automate all kind of things on the Docker Compose setup, and their Dockerfile configurations to optimize their workflow. As described in my post [Local XM Cloud development](https://www.sergevandenoever.nl/Local_XM_Cloud_development/) my starting point is the Docker configuration as provided by the project scafolder of XM Cloud, which provides a complete configuration for local XM Cloud development with all the familiar scripts, where the following, as a minimal quickstart, are the ones required to start working on XM Cloud locally:

`init.ps1` - configure your system for working with Docker Compose and XM Cloud - in a terminal window with Administrator rights execute the following command: 

    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\license\license.xml" -AdminPassword "b"
    ```

Note that the location of your Sitecore license file and the administrator password that you choose may vary. After executing this command restart you terminal before executing the next command.

`.\up.ps1` - the script to start Docker Compose and bring your complete container-based environment to live. Note that XM Cloud wants to connect to https://sitecorecloud.io to first confirm your device, and in a next step event authenticate your device at https://auth.sitecorecloud.io. So no XM Cloud development in the clouds I'm currently in, or you should have a satelite phone (can the iPhone 14 Pro maybe do this?) to get through the confirmation and authentication steps.

`.\down.ps1` - with this script you bring the container-based Sitecore environment down, and your machine gives you back your memory, and selences the spinning fan sound to normal proportions.

## Making local XM Cloud accessible to the outside world?!

**NOTA-BENE: this is a failed experiment! - it does NOT work for XM Cloud, but there are some learnings in it, and it DOES work for normal Sitecore XM/XP Docker containers or any other container you want to make known to the outside world.
**

I have two reasons to try to make the XM Cloud container based environment accessible to the outside world:

1. So I can build and deploy the head to Vercel (or any other external environment), and make it the rendering host for the locally running XM Cloud
2. As described in my post [Local XM Cloud development](https://www.sergevandenoever.nl/Local_XM_Cloud_development/) I was able to start the Pages editor, and I was wondering if Pages as a SaaS solution could be used to access my local XM Cloud development environment.

My first step was to tunnel the website to the outside world. Because the CM container I want to open up to the outside world has a hostname (it is locally accessible on https://xmcloudcm.localhost, and not on something like http://localhost:3000) I can't use the free version of NGrok (the most well-known tunneling software), and the NGrok free version also does not allow you to use a self-picked subdomain name so the URL to the container will change on each restart.

Luckely enough there is great free tunnel software that supports both features for free: localtunnel. So I installed localtunnel with the command `npm install -g localtunnel` (make sure you have Node.js and npm installed). After that you can have a look at the options it supports:

```txt
PS C:\Users\serge> lt --help
Usage: lt --port [num] <options>

Options:
  -p, --port                Internal HTTP server port                 [required]
  -h, --host                Upstream server providing forwarding
                                             [default: "https://localtunnel.me"]
  -s, --subdomain           Request this subdomain
  -l, --local-host          Tunnel traffic to this host instead of localhost,
                            override Host header to this host
      --local-https         Tunnel traffic to a local HTTPS server     [boolean]
      --local-cert          Path to certificate PEM file for local HTTPS server
      --local-key           Path to certificate key file for local HTTPS server
      --local-ca            Path to certificate authority file for self-signed
                            certificates
      --allow-invalid-cert  Disable certificate checks for your local HTTPS
                            server (ignore cert/key/ca options)        [boolean]
  -o, --open                Opens the tunnel URL in your browser
      --print-requests      Print basic request info                   [boolean]
      --help                Show this help and exit                    [boolean]
      --version             Show version number                        [boolean]
```

Normally you can use the following command to make a Sitecore Docker container (e.g. https://xmcloudcm.localhost) accessible from the outside world:

```
lt --local-host xmcloudcm.localhost --local-https --allow-invalid-cert --port 443 --subdomain xmcloudserge
```
Note that `--allow-invalid-cert` must be used because a self-signed certificate is used for https access to the container.

This will result in the Sitecore docker environment to be accessible on `https://xmcloudserge.loca.lt`. I wanted to have the internal name to be the same as the outside name, so I edited the `init.ps1` script to change all occurences of `xmcloud.localhost` to `xmcloudserge.loca.lt`. In `init.ps1` this value is used three times:

1. to make a self-signed certificate:
```ps1
& $mkcert "xmcloudserge.local.lt"
```

2. to add an entry to the `hosts` file so the URL is locally known (comment out again when using the tunnel to the outside world, otherwise your browser will resolve it locally instead of from the outside):
```ps1
Add-HostsEntry "xmcloudcm.localhost"
```

3. To set as the `CM_HOST` environment variable:
```ps1
Set-EnvFileVariable "CM_HOST" -Value "xmcloudcm.localhost"
```

So everything is set up the way I want it to be, and I started my container. But it does not work. Why?

## Why it fails...

The Sitecore XM Cloud container, starting at https://xmcloudserge.loca.lt, tries to autheticate at https://auth.sitecorecloud.io using OAUTH. And in this authentication the return URL is hard-coded to https://xmcloud.localhost. And this is also the URL that is white-listed at Auth0 by Okta (used by https://auth.sitecorecloud.io) as a supported return URL. So providing our own URL will sadly enough never work:-(

The request that is executed:

```txt
https://auth.sitecorecloud.io/authorize?client_id=we67e2gGRO0HIfglz23Yypp4T5Rshu86&response_type=code&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DE7FEVVpMc5sJM8SLjOlOU_m73gkTqvOfFxs2LrcnaZdSrX3MRF_Q12ZyVDpbKIXZhDDWImasq51g1-y5BGIXOsq21vxGGb8FJjz12NttbaecPcQ8z9Kd0Fnrv5yZmRk0Fjf3TntIMUw2WT628TXtyfEeHhJ8gbaem0rO08GVln8TwzKDJR4qEg7nxqEbucvf7Bt1KMCg_FjD0VdxC2m1hq0WEZ5zfKLTTf_fYOg0-d0&response_mode=form_post&nonce=638012677311361499.Y2ZmMWYzMjUtNjRkZS00NDJjLWI0YzctZjZmZWNmOWUyZWRiZGIwZGE5NzEtNDYwMS00YmU0LWJlMzItZTU5MWVmNDc5MDBj&redirect_uri=https%3A%2F%2Fxmcloudcm.localhost%2Fidentity%2Fsignin-auth0&organization_id=&returnTo=https%3A%2F%2Fxmcloudcm.localhost%2Fsitecore&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0
```

## Conclusion

So why this whole story? I hope it will save you, the reader, a lot of time if you want to do a similar thing. This whole endeavor and finding out why it does not work costed me at least 10 hours, although it is good to know that the above trick works for non XM Cloud Sitecore XM/XP containers, even without the whole "naming" the container hostname like xxxx.loca.lt, as long as you make sure that all URLs to scripts and media are relative URLs.

And my learnings: don't fiddle (too much) with the XM Cloud container scripts, use it like it is intended to be used. Really? Am I typing this? More on what you can hack around on it in future posts:-)