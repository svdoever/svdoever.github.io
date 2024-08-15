---
title: XM Cloud - delete a project, and more...
published: true
date: '2022-11-27'
spoiler: With XM Cloud you get a limited set of projects that you may create. When you mess up one of you projects, you want to be able to delete it and start over. In the UI I could not find a way to delete a project with all its environments, but Sitecore CLI to the resque.
description: With XM Cloud you get a limited set of projects that you may create. When you mess up one of you projects, you want to be able to delete it and start over. In the UI I could not find a way to delete a project with all its environments, but Sitecore CLI to the resque.
image: https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/home/products/xm-cloud/xm-cloud-hero-960-720pxxl.jpg
tags: sitecore, xmcloud
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_Project_ID - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

Within Sitecore XM Cloud you can create a limited set of projects (we have 2), so if you need to create a new project, you have to get rid of an old project first. I messed up the configuration of one of my projects so I wanted to delete the project. But Within XM Cloud Portal I could not find any UI function to delete a project. But we also have the Sitecore CLI to perform tasks like these. In this post, I will explain how - together with some background information on XM Cloud.

## The structure of XM Cloud: Organization - Project - Environment

Within XM Cloud you have access to one or more organizations. Within your organization, you create a project. A project is an empty thing - no servers involved, but with some important configurations attached to it. One of these configurations is the Git repository wURL here the code for the project resides. But more on that later.

First a picture from the Sitecore XM Cloud documentation:

![](XM_Cloud_Delete_a_project/03-XMCloudStructure.png)

As you can see there are two projects, and each project can have a limited set of environments (e.g. dev, qa, prod). In my case, I messed up the configuration of one of my projects because I moved the Git repository location from a GitHub organization location to a personal GitHub location. This means that the URL of the Git repository changed, and I see no way to change this URL within XM Cloud (not in the XM Cloud Portal UI, and not through the Sitecore CLI).


Within XM Cloud Portal I could not find any function to delete a project, but we also have the Sitecore CLI to perform tasks like these. But first remove all environments, this can be done in the UI:

![](XM_Cloud_Delete_a_project/r0o11pmc0110.png)

If you have any running deployments, cancel them first:

![](XM_Cloud_Delete_a_project/r0o25pmc0250.png)

And then deledte the environment:

![](XM_Cloud_Delete_a_project/r0o13pmc0130.png)

Or it can be done with the Sitecore CLI. If you open a terminal window and navigate to the root folder of your project, you first need to login to XM Cloud:

```
dotnet sitecore cloud login
```

When logged in into XM Cloud, the Project Id of the project to delete can be retrieved using the command:

```
dotnet sitecore cloud project list
```

And based on the project id retrieve the list of environments:

![](XM_Cloud_Delete_a_project/r0o31pmc0310.png)

And to delete the environment itself execute:

```
dotnet sitecore cloud environment delete --environment-id 54TqsuxtRFia7wWYQzQKjc
```

And when the complete project is "empty" (no more environments left) I can finally delete the project itself, so I can recreate one with the correct Git repository connected to it...

```
dotnet sitecore cloud project delete --project-id 2B22JpSV4HBQjZYnhUfXby
```

![](XM_Cloud_Delete_a_project/r1o23amc1231.png)


Note that on Sitecore Learning there is a whole section on [XM Cloud Command Line Interface](https://learning.sitecore.com/learn/course/1037/xm-cloud-command-line-interface-cli;lp=36).