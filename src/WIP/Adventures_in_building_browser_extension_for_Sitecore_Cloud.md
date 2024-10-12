---
title: Adventures in building browser extension for Sitecore Cloud
published: false
date: 2024-05-07
spoiler: To unlock even more power from Sitecore Cloud, I decided to dive in the wonderful world of building a browser extension. I'm sure you will have numerous ideas yourself on accessing information in the Sitecore eco-system. Get inspired by the endless capabilities of browser extensions!
description: To unlock even more power from Sitecore Cloud, I decided to dive in the wonderful world of building a browser extension. I'm sure you will have numerous ideas yourself on accessing information in the Sitecore eco-system. Get inspired by the endless capabilities of browser extensions!
image: external image URL, starting with https:// - store at https://imgbb.com/
tags: 
canonical_url: https://www.sergevandenoever.nl/Adventures_in_building_browser_extension_for_Sitecore_Cloud
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: Sitecore Cloud browser extensions
---
You are probably all familiar with the power of browser extensions. The first extension I always install is 1Password, the password manager I use, so all login username/password boxes of any website are enhanced with the capability to automatically fill in the required information. And another great one is [Awesome Screen Recorder & Screenshot (google.com)](https://chromewebstore.google.com/detail/awesome-screen-recorder-s/nlipoenfbbikpbjkfpfillcgkoblgpmj), that allows you to create screenshots and video recordings. Browser extensions can be published in a special store. For Chrome, the Google web browser, this store is located at [Chrome Web Store (google.com)](https://chromewebstore.google.com/). When opening this store in Edge, you will see the following message:

![Chrome extension work in Edge](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud/image-2024572245562.png)

So Chrome extension work in both Chrome, and Edge - this is because both browser are built on top of the Chromium browser engine.

Funny thing is that there is also a Microsoft store for Edge, where extensions are called... Add-ons:-)

![Edge Add-ons store](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud/image-20245799617.png)

Wondering about the differences between the Chrome extensions and Edge add-ons I had a good conversation with a friend of mine on this topic: https://chat.openai.com/share/9ef9b20f-5929-465d-88aa-3fce9f90798d.

## Sitecore extensions
And how about Sitecore? Are there any Sitecore add-ons/extensions available? Yes there are...

In the Edge store you will find:
![Sitecore add-ons in Edge store](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud/image-202457260738.png)
Ehhh... why can you filter on "Extensions" in the "add-ons" store?!

In the Chrome store you will find a lot:
![Extensions in the Chrome store](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud/image-202457304839.png)
Especially interesting is the [Sitecore XM Cloud Extensions (google.com)](https://chromewebstore.google.com/detail/sitecore-xm-cloud-extensi/pkonhbljhhbhbdjkacgmafheaebijmjh) by Jeff L'Heureux, because it play in the same space I would like to create my browser extension in. Most other browser extensions are more in the space of good old Sitecore XM/XP, with some really advanced features!

## A new adventure
Inspired by available browser extensions, I decided to take on the challenge of building my own browser extension for Sitecore Cloud, and especially in the space of Sitecore Components. I will not give away my idea yet, In the following posts, I will share my journey, the challenges I faced, and how I overcame them. But first an overview of the technology stack I will be using.

Browser extensions are written in JavaScript, HTML and CSS. I'm a big adept of TypeScript and React, so I will throw those in the mix. As the extension is going to extend capabilities of Sitecore Cloud, and I don't want to reinvent styling of buttons, I will adopt the the Sitecore Cloud design system and component set, called Blok. Documentation on this design system can be found at [Blok Design System (sitecore.com)](https://blok.sitecore.com/).

## Selecting a boilerplate
Handling all the intricacies of building a browser extension is complex, so I searched for a good boilerplate. After some research and trying out multiple alternatives I decided to go for [Jonghakseo/chrome-extension-boilerplate-react-vite: Chrome Extension Boilerplate with React + Vite + Typescript (github.com)](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite):
![Browser extension boilerplate](WIP/Adventures_in_building_browser_extension_for_Sitecore_Cloud/image-2024574856818.png)

Where my selection criteria were:

- MIT license
- Not a lone wolf project - this one has 32 contributors
- A lot of discussions in the issues
- Main implementation language is TypeScript
- Still in development, with recent commits
- Uses React + Vite for fast and lean development environment

In my next post I will go into the capabilities of a browser extension. Stay tuned!
