---
title: XM Cloud - prepare for development
published: boolean that determines whether or not your article is published
date: '2020-09-18'
spoiler: A not-to-short spoiler line.
description: description area in Twitter cards and open graph cards
image: external image URL, starting with https://
tags: max of four tags, needs to be comma-separated
canonical_url: https://www.sergevandenoever.nl/... - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

Ok, you got access to XM Cloud, create a project, and have you project code scaffolded into a repository on GitHub. What now?

I propose you will take the next steps:

1. Clone the GitHub repository on your local machine
2. Determine the base URL of your dev environment, it is the base URL of the Content Editor. In my case this is https://xmc-macaw-acmexmcloud-dev.sitecorecloud.io
3. In a browser open the URL https://xmc-macaw-acmexmcloud-dev.sitecorecloud.io/sitecore/admin/showconfig.aspx, do view-source on the page, and copy the content in a file in the root of your project with the name `web.config.xml`
4. By default the XM Cloud scaffolder creates a project name in all generated code with the name `sxastarter`. This is not the name you want to stay in your source code, and it is also not the name as expected by the `.gitignore` file, where we see that the folder `rendering` is used. Rename the folder `src/sxastarter` to the name `rendering`. This is also the name used in for example the `Sitecore.Demo.XmCloud.PlaySummit` example project by Sitecore. If you open your complete repository in VSCode and search for `sxastarter` you will see all occurrences:
  ![](XM_Cloud_prepare_for_development/r1o6pmc161.png)
6. After the rename of the folder `src/sxastarter` to `rendering` the following 12 results remain that you can now replace with a global search-and-replace to your tenant name:
  ![](XM_Cloud_prepare_for_development/r1o35pmc1351.png)
7. 