---
title: XM Cloud - getting the Project ID
published: true
date: '2022-11-11'
spoiler: When working with the Sitecore CLI against XM Cloud, the Project Id is needed as a parameter. There are multiple ways to retrieve this Project Id. 
description: When working with the Sitecore CLI, the Project Id is needed as a parameter. There are multiple ways to retrieve this Project Id.
image: https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/home/products/xm-cloud/xm-cloud-hero-960-720pxxl.jpg
tags: sitecore, xmcloud
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_Project_ID - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

When working with the [Sitecore CLI](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-command-line-interface.html) to retrieve information from XM Cloud, for many operations a Project Id is required. There are multiple ways to obtain this Project Id. In this post I will describe two ways to do this.

The first way is using the Sitecore CLI itself. To work with the Sitecore CLI, we need to have the Sitecore CLI configured. Within an XM Cloud project create by XM Cloud, this configuration is already part of the code repository.

![All configuration files for the Sitecore CLI](XM_Cloud_Project_ID/r5o21amc5215.png)

If you open a terminal window and navigate to the root folder of your project, you first need to login to XM Cloud:

```
dotnet sitecore cloud login
```

The connection information is available in the `user.json` file, and you are presented with a web interface to approve the authentication:

![](XM_Cloud_Project_ID/r5o25amc5255.png)

![](XM_Cloud_Project_ID/r5o26amc5265.png)

After pressing the `Confirm` button you are automatically authenticated if you recently logged in on the Sitecore Cloud portal, otherwise you are presented with a login screen.

When logged in into XM Cloud, the Project Id can be retrieved using the command:

```
dotnet sitecore cloud project list
```

![](XM_Cloud_Project_ID/r5o30amc5305.png)

On [Sitecore Slack](https://sitecore.chat) also another approach was described to get the Project Id. 

Open the XM Cloud Deploy app on https://deploy.sitecorecloud.io/:

![](XM_Cloud_Project_ID/r5o33amc5335.png)

Click on the settings icon in the upper right corner and enable in **Experimental Features** the **Environment Details**:

![](XM_Cloud_Project_ID/r5o35amc5355.png)

If you now click on the project name in the XM Cloud Deploy app:

![](XM_Cloud_Project_ID/r5o42amc5425.png)

And then click on the environment name:

![](XM_Cloud_Project_ID/r5o43amc5435.png)

A pane with environment information is available with all the IDs you need.

![](XM_Cloud_Project_ID/r5o47amc5475.png)

Note that on Sitecore Learning there is a whole section on [XM Cloud Command Line Interface](https://learning.sitecore.com/learn/course/1037/xm-cloud-command-line-interface-cli;lp=36).