---
title: XM Cloud rendering host options and fast local development with Experience Editor & Pages
published: true
date: '2022-11-21'
spoiler: XM Cloud comes with an out-of-the-box internal rendering host. Deployment to this host is currently slow (Sitecore is working on decoupling Editing Host builds/deployments from CM builds/deployments so that Editing Host builds/deployments are fast). Lets use a locally running rendering host, and expose it to the outside world using a reverse-proxy so the Experience Editor and Pages can work with the rendering host on your dev box.
description: XM Cloud comes with an out-of-the-box internal rendering host. Deployment to this host is currently slow (Sitecore is working on decoupling Editing Host builds/deployments from CM builds/deployments so that Editing Host builds/deployments are fast). Lets use a locally running rendering host, and expose it to the outside world using a reverse-proxy so the Experience Editor and Pages can work with the rendering host on your dev box.
image: https://i.ibb.co/5W4BqJy/local-dev-against-cm-excalidraw.png
tags: xmcloud, SXA, headless
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_rendering_host_options_and_fast_local_development/
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

In the stream of information about Sitecore headless you probably heard the term *rendering host* more than once.

The rendering host is the front-end application that consumes headless Sitecore data. This can be a website, but also an app. It is the *head* on *headless Sitecore*.

There is also a less heard term, the *editing host*. The editing host enables the editing experience for Sitecore headless so that the content and layout of pages can be done with components provided by the head. Currently, this editing host must be a website because the content and layout editors **Experience Editor** and **Pages** are browser-based editors. The following concept is key: **Components provided by the head**. You want to design your pages with components that are developed by the front-end team, and the rendering of the page during editing and preview is done by the website developed by the front-end team.

## Development with the out-of-the-box editing host

When you create a project using the XM Cloud Deploy App, the project is set up with a default editing host as described in my blog post [XM Cloud - first steps on building renderings with Next.js](https://www.sergevandenoever.nl/XM_Cloud_first_steps_on_building_rederings_with_Nextjs/). This internal editing host works out of the box on your remote XM Cloud instance.

The code for the editing host and the components are in the `sxastarter` folder of the project scaffolded by XM Cloud - this is the front-end part of the default create SXA Headless project, which uses React.js, Next.js and TypeScript. Changes to the React.js components can be deployed to the out-of-the-box internal editing host by a code commit, and a Build & Deploy of the XM Cloud environment:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r5o39pmc5395.png)

Important to know is that this out-of-the-box editing host only works with a Sitecore JavaScript Services (JSS) based website, and not with an ASP.NET built with the [Sitecore ASP.NET Rendering SDK](https://doc.sitecore.com/xp/en/developers/hd/201/sitecore-headless-development/sitecore-asp-net-rendering-sdk.html).

This process of code-change, commit, push, build, and deployment for using the internal out-of-the-box editing host is a lengthy process because both the editing host and the CM deployment are done, resulting in creating and deploying containers, and always a cold start of the complete environment. Therefore, using the internal editing host is currently not useful for a fast development cycle. Sitecore is working on decoupling editing Host builds/deployments from CM builds/deployments so that editing Host builds/deployments are fast and don't require a cold start of the complete CM environment. But for a really fast development cycle in the editing host nothing can beat local development.

## Local development with Docker containers

An option for a fast front-end development cycle is to do local development with Docker containers as described in my blog post [Running the XM Cloud SXA Starter on your local machine](https://www.sergevandenoever.nl/XM_Cloud_SxaStarter/). This works perfectly fine, and with `npm run start:connected` where changes in the source code are watched, a compilation is done instantly, and the changes are directly reflected in the Experience Editor through a reload. But there are also some disadvantages to this approach:

- For developers working on the head and doing for example React development, running Windows-based Docker containers is a lot of hassle, or maybe even impossible when you develop the front-end on a MacBook
- This workflow does work with the Experience Editor, but not with Pages - Pages can't connect to a local environment running in Docker containers, as explained in my blog post [The XM Cloud container - don't fiddle (too much) with it...](https://www.sergevandenoever.nl/XM_Cloud_container_nofiddle/)

## Development with a custom external editing host

A custom external editing host is mandatory for a fast front-end development-cycle, or when a non-JSS-based editing host is used like for example ASP.NET.

How to configure this is described in the documentation: [Walkthrough: Configuring external editing hosts for XM Cloud instances](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--configuring-external-editing-hosts-for-xm-cloud-instances.html), where the XM Cloud CM configuration is modified with a patch file.

There is also a blog post [Setting up an external XM Cloud Rendering Host to work with Experience Editor and Pages](https://robearlam.com/blog/setting-up-an-external-xm-cloud-rendering-host-to-work-with-experience-editor-and-pages) by Rob Earlam, who uses an ASP.NET editing host with the [Sitecore ASP.NET Rendering SDK](https://doc.sitecore.com/xp/en/developers/hd/201/sitecore-headless-development/sitecore-asp-net-rendering-sdk.html).

Both approaches need your editing host website to be deployed somewhere so it can be reached by the **Experience Editor** and **Pages**, and to configure the rendering host a full deployment to XM Cloud is required.

### Local rendering host against Experience Edge, internal editing host for editing

> **NOTE: non-preferred approach**

It is also possible to run your rendering host locally on http://localhost:3000, and use the out-of-the-box internal editing host OR an editing host deployed to Vercel for editing. This approach is explained in the video [Frontend Developer Setup for XM Cloud in 5 minutes](https://www.youtube.com/watch?v=Kig3kWZ8FuQ) by Sebastian Winter, who describes how to configure local "head" development against Experience Edge by doing the following actions in the folder `src/sxastarter`. To achieve this we need to 

1. Copy `.env` to `.env.local`
2. Set the following values:
    - `PUBLIC_URL=http://localhost:3000` - we run the Next.js site on this address using `npm run start:connected`
    - `SITECORE_API_KEY=xxxx` - where `xxxx` is the Edge token you can request with the script `New-EdgeToken.ps1`
    - `JSS_APP_NAME="SergeFirst"` - or your SXA site name
    - `GRAPH_QL_ENDPOINT=https://edge.sitecorecloud.io/api/graphql/v1` - this the Sitecore Experience Edge GraphQL endpoint
    - `FETCH_WITH=GraphQL` - we use GraphQL for fetching layout and dictionary data
    - `DEBUG=sitecore-jss:*,-sitecore-jss:layout` - to enable some debugging

3. Run `npm install`
4. Start the Next.js app in connected mode using `npm run start:connected`

![](XM_Cloud_rendering_host_options_and_fast_local_development/local_dev_against_edge.excalidraw.png)

You first need to do a commit/push to GitHub, and run XM Cloud Deploy to deploy to the internal editing host OR deploy to Vercel, and have Vercel configured as the rendering host as Sebastian describes in his video [Deploy your first Headless SXA site to Vercel](https://www.youtube.com/watch?v=0UpihW2QxaQ).

This approach would not be my preferred development workflow when working on components you want to test in the Experience Editor or Pages, because in the front-end development workflow you want to see your changes instantly, instead of waiting for deployment.

### Local editing host with direct connection to Experience Edge and Pages

What I really want to achieve is that I use my locally running rendering host on http://localhost:3000 when I run `npm run start:connected`.
Problem is that **Experience Editor** and **Pages** can't access this local server unless you use a reverse proxy to make your local site accessible to the outside world.

There are multiple reverse proxy tools to do this like [ngrok](https://ngrok.com/) and [localtunnel](https://localtunnel.me). We need to publish a local site with a port number to an external domain. With **ngrok** this is a paid feature, but with **localtunnel** this is free, so I will use **localtunnel** here.

The setup that I am aiming for is the following:

![](XM_Cloud_rendering_host_options_and_fast_local_development/local_dev_against_cm.excalidraw.png)

We need some values for this configuration, I will explain how to obtain them:

- `SITECORE_API_HOST` - open in XM Cloud the **Content Editor**, and take the base URL. In my case this is https://xmc-macaw-macawxmcloud-dev.sitecorecloud.io/
- `JSS_EDIT_SECRET` - open the `showconfig.aspx` page, in my case this is https://xmc-macaw-macawxmcloud-dev.sitecorecloud.io/sitecore/admin/showconfig.aspx, in the output search for `JavaScriptServices.ViewEngine.Http.JssEditingSecret` and take the value
- `SITECORE_API_KEY` - this is the **Item Id** of Sitecore item `/sitecore/system/Settings/Services/API Keys/xmcloudpreview` (use the **Content Editor**)

You can now execute the following steps:

1. In the Content Editor duplicate the rendering host configuration `xmcloudpreview` (`/sitecore/system/Settings/Services/Rendering Hosts/xmcloudpreview`) twice, to `<your site name>_internal` and `<your site name>_local`, e.g. `SergeFirst_internal` and `SergeFirst_local`, and change their **Application name** to `SergeFirst_internal` and `SergeFirst_local`:
   ![](XM_Cloud_rendering_host_options_and_fast_local_development/r1o33pmc1331.png)
2. Modify the domains of the **Server side rendering engine endpoint URL** and **Server side rendering engine application URL** fields in the new create `SergeFirst_local` rendering host item to point to the `loca.lt` domain (which we configure in the next steps):
   ![](XM_Cloud_rendering_host_options_and_fast_local_development/r1o46pmc1461.png)
3. Install **localtunnel** globally with `npm install -g localtunnel`
4. Create a `.env.local` file with the following settings:
    - `SITECORE_API_HOST=https://xmc-macaw-macawxmcloud-dev.sitecorecloud.io/` - URL of your CM
    - `JSS_APP_NAME="SergeFirst"` - Name of your app
    - `PUBLIC_URL=https://xmc-59qqzdup3uinohoazx4prn.loca.lt` - this is the external URL when we use **localtunnel**, your value will differ
    - `JSS_EDITING_SECRET=**********`
    - `SITECORE_API_KEY={********-****-****-****-********}`

5. Start your local rendering host in the folder `src/sxastarter`, e.g. `npm run start:connected`
6. To keep things simple we run **localtunnel** with a subdomain that is the same name as your internal rendering host, in my case `lt --port 3000 --subdomain xmc-59qqzdup3uinohoazx4prn` - this results in an externally accessible site proxying to http://localhost:3000 with the URL https://xmc-59qqzdup3uinohoazx4prn.loca.lt
7.  Open the site, in my case https://xmc-59qqzdup3uinohoazx4prn.loca.lt - it can be that there is a **Click to Continue** button you need to click first. When not clicked a blank page will be shown **Experience Editor** and **Pages**:
  ![](XM_Cloud_rendering_host_options_and_fast_local_development/r1o52pmc1521.png)
9.  In the **Content Editor** we can now switch between the **internal** rendering host configuration and the **local** rendering host configuration on the `Site Grouping` settings of your site:
    ![](XM_Cloud_rendering_host_options_and_fast_local_development/r1o51pmc1511.png)

When needed additional rendering host configurations can be added as well like for example a Vercel-deployed rendering host.

Note that if **localtunnel** is not running anymore, an error is given in **Experience Editor** and **Pages**:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r0o18pmc0180.png)

## Fixing the rootItemId error

When you open https://xmc-59qqzdup3uinohoazx4prn.loca.lt you will see the following error:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r5o6pmc565.png)

As described in my blog post [Running the XM Cloud SXA Starter on your local machine](https://www.sergevandenoever.nl/XM_Cloud_SxaStarter/) we need to make a change to the file `src\lib\dictionary-service-factory.ts` to use the GUID of the template ID of the home item of your JSS app:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r5o13pmc5135.png)

So the code will look like this:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r5o15pmc5155.png)

## Fixing the missing CDP\_CLIENT\_KEY issue

NOTA BENE: See the UPDATE at the end of this section for retrieving the required settings.Next, you will be greeted with the following error:

![](XM_Cloud_rendering_host_options_and_fast_local_development/r6o36amc6366.png)

This issue can be solved by setting the `NEXT_PUBLIC_CDP_TARGET_URL` and `NEXT_PUBLIC_CDP_CLIENT_KEY` environment variables as well, but as described in the Sitecore documentation [The Next.js Personalize add-on](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-next-js-personalize-add-on.html) you need to make a request to Sitecore Support for **XM Cloud Personalize Environment Variables**. Include the site name in your request.

![](XM_Cloud_rendering_host_options_and_fast_local_development/r6o40amc6406.png)

In my blog post [Running the XM Cloud SXA Starter on your local machine](https://www.sergevandenoever.nl/XM_Cloud_SxaStarter/) I work arround this issue by changing the source code for the `CdpPageView` component in `src/Scripts.tsx` and commenting out the `CdpPageView` components (run `npm run lint` to see if code formatted correctly):

![](XM_Cloud_rendering_host_options_and_fast_local_development/r0o31amc0310.png)

Commenting out the `CdpPageView` component is not a very sustainable solution, but good enough to get it working as long as the **XM Cloud Personalize Environment Variables** variables are not known yet.

UPDATE:

If you open **Pages**, press F-12 for the developer tools, and filter the network tab on `create.json` you will see:
In the screenshot, you will see that the required client key is visible.

in `env.local` set:
- `NEXT_PUBLIC_CDP_TARGET_URL=https://api.boxever.com`
- `SITECORE_API_KEY=****************` - the value of `client_key` 

Now you can revert the changes to `src/Scripts.tsx`.

## Testing the local editing host

If you selected the local editing host configuration (e.g. `SergeFirst_local`) and open the **Experience Editor** or **Pages**, you will see the locally running editing host in action! Note that changes to components are directly reflected in both the **Experience Editor** and **Pages**, and that they both automatically reload their page.

When the **localtunnel** is stopped you will see an error in the **Experience Editor** or **Pages**. Change the **selected predefined application rendering host** of the **Site Groupings** settings of your site back to the internal rendering host and you will use the out-of-the-box internal editing host again.

I would like to thank Andy Cohen and Sebastian Winter from Sitecore for their help in getting this setup working. 