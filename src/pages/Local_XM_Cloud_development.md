---
title: Local XM Cloud development
published: true
date: '2022-10-11'
spoiler: Although XM Cloud runs in the cloud, development can be done locally using Docker containers. This way we can see what we can do with XM Cloud without having access to the real stuff (yet).
description: Explore XM Cloud locally using Docker containers.
tags: xmcloud, docker, sitecore
canonical_url: https://www.sergevandenoever.nl/... - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

In my article on LinkedIn called [What do we know about XM Cloud?](https://www.linkedin.com/pulse/what-do-we-know-xm-cloud-serge-van-den-oever/) I show screenshots on what happens when you create an XM Cloud project using the Next.js based starter template. One of the steps creates a GitHub repository where it stores the XM Cloud code repository belonging to the created XM Cloud project, used for deployment. In the code base there are also all the scripts to spin up a local development environment using docker containers.

Because I don't have access to the real XM Cloud, I can't create such a starter project to play with. But because the code repository shown in the screenshots can be found on GitHub, and in that codebase we can identify a "fingerprint" to find the newest version of this codebase on GitHub, it is easy to find a recent repository so we can play with the newest stuff. 

The fingerprint I selected in the codebase is `SITECORE_API_KEY_xmcloudpreview`. I tried with `SITECORE_API_KEY_xmcloud` but that is in no GitHub repository yet (probably will be after the Sitecore Symposium:-))

On GitHub it is easy to search for all repositories containing code with this string, just use the following [URL](https://github.com/search?o=desc&q=SITECORE_API_KEY_xmcloudpreview&s=indexed&type=Code):

```
https://github.com/search?o=desc&q=SITECORE_API_KEY_xmcloudpreview&s=indexed&type=Code
```

I already ordered it so the newest repository is on top, check if it is trustworthy for you, fork it, clone it on your local machine, read the README for instructions and have fun! Oh and by the way, nice those secrets in the `.env` file:-)

![](Local_XM_Cloud_development/r2o42amc2422.png)

First all docker images are pulled to your machine (this can take a while, depending on the speed of your netywork connection) which results in the following images:

![](Local_XM_Cloud_development/r2o50amc2502.png)

And after that all the containers are spinned-up, resulting in:

![](Local_XM_Cloud_development/r2o52amc2522.png)

In the console window you will see:

![](Local_XM_Cloud_development/r2o55amc2552.png)

Interesting are the lines 

```
[DeviceLogin] User Code : MGPQ-MNKV
[DeviceLogin] Authentication url : https://auth.sitecorecloud.io/activate?user_code=MGPQ-MNKV
```

The local environment wants to connect to the XM Cloud environment running on `https://sitecorecloud.io` to do "Device Activation".
You can sign up and create a login on this environment without actually having an organization (needed to create projects on XM Cloud).
Sitecore now happily activates your device (whatever that may mean), and the last steps for spinning up your local environment are executed:

![](Local_XM_Cloud_development/r2o1amc212.png)

It starts a local XM Cloud on the URL [https://xmcloudcm.localhost/sitecore/client/Applications/Launchpad?sc_lang=en](https://xmcloudcm.localhost/sitecore/client/Applications/Launchpad?sc_lang=en]) and we are in business!

![](Local_XM_Cloud_development/r2o4amc242.png)

When you want to login to the XM Cloud environment (I opened the URL in an incognito window) you will see that it does this through the XM Cloud portal at `https://sitecorecloud.io`. Logi in with your portal account.

![](Local_XM_Cloud_development/r2o9amc292.png)

The first thing you will want to try out is the new **Pages** editor. Bad luck. The Pages editor (a reincarnation of the Horizon/Symphony/... editor) is a SaaS product that requires you to have and organization, as you can see in the following screenshot:

![](Local_XM_Cloud_development/r2o13amc2132.png)

Which you can see as well if you click the **Go to Portal** link:

![](Local_XM_Cloud_development/r2o14amc2142.png)

I assume that if you do it the right way, and create the repository based on the starter template when you have access to an organization, that the Pages editor will actually work with your local development instance of XM Cloud. But this is just guessing.

A fun fact: if you clicked the **Go to Portal** button, and from the portal press the back button in your browser twice you **do** end up in the Pages editor, but there is not much there yet:

![](Local_XM_Cloud_development/r2o18amc2182.png)

The Experience Editor and Content Editor do work as expected however.