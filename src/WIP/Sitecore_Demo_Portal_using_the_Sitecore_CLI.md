---
title: Sitecore Demo Portal - using the Sitecore CLI
published: true
date: 2024-02-25
spoiler: When you want to use the Sitecore CLI against the Sitecore Demo Portal you need to login. In this post I describe how to do this login.
description: When you want to use the Sitecore CLI against the Sitecore Demo Portal you need to login. In this post I describe how to do this login.
image: external image URL, starting with https:// - store at https://imgbb.com/
tags:
  - max
  - of
  - four
  - tags
  - needs
  - to
  - be
  - comma-separated
canonical_url: https://www.sergevandenoever.nl/.Sitecore_Demo_Portal_using_the_Sitecore_CLI
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
When building a demo using the Sitecore Demo Portal, we also want to be able to use the Sitecore CLI against the created environment. I wrote a [blogpost](https://www.sergevandenoever.nl/Sitecore_demo_portal_sitecore_cli/) on this topic in 2022, but some things changed in the mean time. This post will explain how to do it.

We assume you have a repository where you manage you `cm` folder with `web.config` patches and files to be synced to to your Sitecore XM Content management instance. 

Execute the following command in the root folder of this repository:

```
dotnet new tool-manifest
dotnet nuget add source -n Sitecore https://sitecore.myget.org/F/sc-packages/api/v3/index.json
dotnet tool install Sitecore.CLI
dotnet sitecore init
```

We can now do an interactive login using the command:

```
dotnet sitecore login --client-credentials true --auth https://yoursite-id.sitecoredemo.com --cm https://yoursite-cm.sitecoredemo.com --allow-write true
```

