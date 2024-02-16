---
title: XM Cloud Deploy API  
published: true
date: '2023-01-17'
spoiler: XM Cloud Deploy has the Sitecore CLI and a web UI for deployment, but both are based on a well-documented API!  
description: XM Cloud Deploy has the Sitecore CLI and a web UI for deployment, but both are based on a well-documented API!
image: https://i.ibb.co/jkTLNp0/Woman-behind-computer-with-ropes-to-the-cloud.png
tags: xmcloud, swagger, deployment, api
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_Deploy_API/
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

XM Cloud Deploy manages both the Cloud CMS modifications deployment to XM, and the frontend code deployment to the internal editing host. This can be done through the provided web UI (https://deploy.sitecorecloud.io/) and the Sitecore CLI. In the blog post [XM Cloud build and deploy like a pro](https://www.sergevandenoever.nl/XM_Cloud_build_and_deploy_like_a_pro/) I described how you can use PowerShell to automate deployments against the Sitecore CLI. But XM Cloud Deploy also provides a REST API that can be used to automate deployments. This REST API is also used by the XM Cloud Deploy web UI, so if you look at the network tab of your browser when performing actions in the web UI and filter on `Fetch/XHR` you will see all the REST API calls that are executed:

![REST API calls executed by XM Cloud Deploy](XM_Cloud_Deploy_API/r2o1amc212.png)

And if you switch to the **Headers** tab you will see that the requests are done using an **Authorization** header with a bearer token:

![](XM_Cloud_Deploy_API/r2o3amc232.png)

The API host is also visible, e.g. https://xmclouddeploy-api.sitecorecloud.io which shows us what it is, the *Sitecore XM CLoud GitOps API*!: 

![](XM_Cloud_Deploy_API/r2o5amc252.png)

## Swagger and OpenAPI

Any good REST API uses [Swagger](https://swagger.io/) to self-document the REST API, and so does the XM Cloud Deploy API. Open up the URL https://xmclouddeploy-api.sitecorecloud.io/swagger and you will see:

![XM Cloud Deploy Swagger](XM_Cloud_Deploy_API/r2o10amc2102.png)

What you will also see is a link to the [OpenAPI specification](https://spec.openapis.org/oas/latest.html) of the REST API:

![Open API link](XM_Cloud_Deploy_API/r2o12amc2122.png)

This is a description of all available API calls in a JSON format:

![OpenAPI specification in JSON](XM_Cloud_Deploy_API/r2o14amc2142.png)

But what is the OpenAPI specification? In their own words:

> The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.

The cool thing is that this specification can be used to create a client SDK for the REST API in any language that you like, so you don't have to interact with the API on an HTTP level. See https://openapi.tools/ for a whole bunch of tools regarding OpenAPI:

![Overview of OpenAPI.Tools website](XM_Cloud_Deploy_API/r2o21amc2212.png)

## Testing API calls in the Swagger UI

Another cool feature of the Swagger UI is that you can test out API calls. Because the XM Cloud Deploy REST API needs authentication, you first need to authenticate in the Swagger UI. Do this through the **Authorize** button in the Swagger UI:

![The Swagger authorize button](XM_Cloud_Deploy_API/r2o24amc2242.png)

Then copy the value of the **Authorization** header from the requests in the network tabn to the **Value** field and press **Authorize**:

![Authorize by pasting the value of the authorization header](XM_Cloud_Deploy_API/r2o27amc2272.png)

This results in the correct authorization:

![Authorized!](XM_Cloud_Deploy_API/r2o28amc2282.png)

Close the window, and now you can test out the different API calls in the Swagger UI. As an example open the `/api/sourcecontrol/v1/templates` call by selecting the down arrow on the right side:

![The sourcecontrol templates call in Swagger](XM_Cloud_Deploy_API/r2o49amc2492.png)

You will see the parameters (`provider` in this case) and the expected response in case of a correct result (200 return code). If you press the **Try it out** button, set the **provider** value to `GitHub` and press the **Execute** button you will see the results of the call:

![Result of sourcecontrol templates call](XM_Cloud_Deploy_API/r2o52amc2522.png)

## Troubleshooting

Note that if you get a 403 (Not Authorized) result you need to retrieve the value of the **Authorization** header again and do the **Authorize** again as described above. 




