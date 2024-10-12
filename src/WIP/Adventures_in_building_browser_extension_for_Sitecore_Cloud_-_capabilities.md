---
title: Adventures in building browser extension for Sitecore Cloud - capabilities
published: false
date: 2024-05-07
spoiler: What can a browser extension do? A lot! I this post I will dive into some of these capabilities - and how I will use it in building my browser extension for Sitecore Cloud!
description: What can a browser extension do? A lot! I this post I will dive into some of these capabilities - and how I will use it in building my browser extension for Sitecore Cloud!
image: external image URL, starting with https:// - store at https://imgbb.com/
tags: 
canonical_url: https://www.sergevandenoever.nl/Adventures_in_building_browser_extension_for_Sitecore_Cloud_-_capabilities
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: Sitecore Cloud browser extensions
---
Writer a browser extensions comes with many intricacies and capabilities. In this post I will go deeper into the capabilities, and the selection of capabilities needed in my browser extension for Sitecore Cloud. As a starting point I use the [Jonghakseo/chrome-extension-boilerplate-react-vite: Chrome Extension Boilerplate with React + Vite + Typescript (github.com)](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite). In this boilerplate many of the capabilities of a browser extension are showcased. 
## And what can it do?
Studying the source code and capabilities of the selected boilerplate gave me a lot of insights in what a browser extension can do. The boilerplate provides for:

- **Popup** - A popup window when you select the browser extension icon
- **ContentScript** - Code injected into the code of a displayed web page, and let this code only be injected for selected URLs
- **Sidepanel** - a sidepanel next to the browser window
- **Background** - Code executed in a background process (service worker), and let this code only be executed for selected URLs
- **Options** - an option page for your browser extension
- **Devtools** - a page within the dev tools
- **New tab** - when a new tab is added, control the showed page on the browser extension

Each capability has its corresponding scripts in the boilerplate, and in most cases a registration in the manifest file in the root of the repository. The newest manifest file format is version V3, see [Manifest file format  |  Chrome for Developers](https://developer.chrome.com/docs/extensions/reference/manifest) for more information.

As Google provides really good documentation, I will not go to deep into the details of all the capabilities, but I will mention a few additional ones that are required for my use case - and this is regarding the communication of information between the different components mentioned above. These include message passing and shared states, which are crucial for synchronizing data and actions across the extension's components (Popup. ContentScript, Background, ...).

With message passing, I can grab information in a ContentScript, and pass it to the code running in Background. In Background I will do an API call, and the results of the API call I store in storage (the shared state). 

But before I go into details, let's explain my case...

## The case: export design system
One of the tools in the XM Cloud product in the Sitecore Cloud product suite is Sitecore XM Cloud Components. With Components it is possible to create *Styles*. These are design elements that can be used to customize the look and feel of your website. They contain of the elements you will normally find in a design system.

![XM Cloud Components design system](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud_-_capabilities/image-2024573755932.png)
With Components it is possible to create components using these styles, and use these components within XM Cloud Pages (the follow-up of the Sitecore Experience Editor) to build your (partial) page templates to be used in the web pages you create.

Next to components delivered by XM Cloud Components, it is also possible to build your own components, for example using Next.js and React. 

And to make it even more complex: it is also possible to "bring your own components" (BYOC) to XM Cloud Components, to build build bigger components. Robbert Hock (Kayee) did a series of blogposts on BYOC, which can be found at [Sitecore BYOC Archives - Kayee](https://www.kayee.nl/category/sitecore/sitecore-byoc/).

But how do you ensure that your custom components, your BYOC components, and your Sitecore XM Cloud Components components all use the same design system? Well... you can't.

This is where my browser extension comes into play.

## Real designers do Figma
All designers I know use Figma, a collaborative interface design tool. Within Figma a design system can be defined, and using export of design tokens the values of this design system can be connected to your styling. This can be either done in for example SASS, or you can take a [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS) approach, as we did in multiple projects, where the design tokens are used in [Vanilla Extract](https://vanilla-extract.style/) (in combination with [Radix UI primitives](https://www.radix-ui.com/primitives)) or with [Griffel](https://griffel.js.org/) (in combination with [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)).

But "less real" designers might use the Styles section of XM Cloud Components to define a design system, and could we extract tokens from it to automatically drive a CSS-in-JS implementation that we can use in our custom components. Lets try...
## What do we need
Lets get started simple. Is there an API available to get the styles out of XM Cloud Components. Well... no. Not a documented one. But if you go to the **Styles** tab in XM Cloud Components, and filter on "stylesheets", you will see a network request:
![Stylesheets network request](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud_-_capabilities/image-202458284688.png)

The request is to   
https://components.sitecorecloud.io/api/libraries/2YkkbVuckpK9GzsTB3XGOc/stylesheets. Every XM Cloud environment 












