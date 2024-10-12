---
title: Sitecore Demo Portal - cm and the web.config
published: true
date: 2024-02-25
spoiler: Use the cm folder to sync files to your Sitecore Demo Portal CM environment and to patch your web.config. But did you know you can check if your patches worked, or files are synced correctly?
description: Use the cm folder to sync files to your Sitecore Demo Portal CM environment and to patch your web.config. But did you know you can check if your patches worked, or files are synced correctly?
image: external image URL, starting with https:// - store at https://imgbb.com/
tags: Sitecore Demo Portal, web.config, cm
canonical_url: https://www.sergevandenoever.nl/Sitecore_Demo_Portal_cm_and_ the_web_config
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
With the Sitecore Demo Portal it is possible to make modifications to your Sitecore XM Content Management environment by connecting your environment to a GitHub repository containing a folder named `cm`. All files in the `cm` folder of your repository are synced to the folder `c:\inetpub\wwwroot` of your CM environment. This makes it possible to add additional files or to make modifications to for example the `web.config` using patch files. This sync process is described here: [Demo Portal - Deploying files to CM instance](https://portal.sitecoredemo.com/help#git-overview). The way to create patch file is described here: [Use a patch file to customize the Sitecore configuration | Sitecore Documentation](https://doc.sitecore.com/xp/en/developers/103/platform-administration-and-architecture/use-a-patch-file-to-customize-the-sitecore-configuration.html)

To see if your web.config changes were applied correctly you can see the resulting `web.config` by accessing the URL:

https://yoursite-cm.sitecoredemo.com/sitecore/admin/showConfig.aspx

It is also good to check if files are synced correctly. This can be done using the Sitecore File Explorer 
https://yousite-cm.sitecoredemo.com/sitecore/shell/default.aspx?xmlcontrol=FileExplorer. 
