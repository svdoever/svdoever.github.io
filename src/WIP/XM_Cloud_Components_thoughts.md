---
title: XM Cloud, Components, many thoughts go through my head...
published: true
date: 2024-02-17
spoiler: A not-to-short spoiler line.
description: description area in Twitter cards and open graph cards
image: external image URL, starting with https:// - store at https://imgbb.com/
tags:
  - Figma
  - XM
  - Cloud
  - Components
  - Design
  - Tokens
  - Web
  - Design
  - Front-End
  - Development
  - Design
  - Systems
  - Storybook
  - TypeScript
  - React
  - CSS
  - JSON
  - Design
  - Tooling
canonical_url: https://www.sergevandenoever.nl/XMCloud_Components_thoughts
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
I did some deep-diving into XM Cloud, looked at Components in its early "pre-release" stages, looked at the the different part of the Components proposition with it's **styles**, **data sources** and **components**, but could not make chocolate of it... Time to revisit it, because so many thoughts go through my head...

## Some thoughts
At Macaw we build websites. Websites need a design. We have designers, and most designers use [Figma](https://www.figma.com/). What is Figma? When I asked my good friend ChatGTP so tell me in one sentence, it came with:

>Figma is a cloud-based, collaborative design tool that allows multiple users to simultaneously create, prototype, and share interactive design projects.

What I always understood is that if you can design it with Figma, you can create it on the web. That is cool.

And it is also about styles, components, and creating a design system.

I saw examples of Figma-usage where the designer was really accurate in naming elements in Figma, so all naming of elements in Figma can be used in the actual code used in building the website as well.

Our developers create design systems as well. We do most of our front-end development with TypeScript and React. Our developers document their version of the design system in [Storybook](https://storybook.js.org/). And we are not the only ones, if you look at the published Storybooks in the [Storybook Component Encyclopedia](https://storybook.js.org/showcase). The cool thing about Storybook is that the same components you build for the real website are used in the stories created to showcase them in Storybook as well.

We see more and more that elements designed in Figma are exported so they can be used in the actual code written by the developers. Those exported elements are called "design token". I again asked my good friend to explain, and it came with:

>Design tokens are the visual atoms of the design system – specifically, they are named entities that store visual design attributes. These are used to maintain consistency in visual appearance across different platforms and devices, and they can represent anything from colors, fonts, and spacing, to time values, z-indexes, and more.

>For example, instead of coding with hard-coded values like "red" or "#FF0000", you might use a design token that represents that color, such as "color-error-400". This way, if the design specification changes, you only need to update the token value, and all instances of that token in the codebase will be updated.

>Design tokens are particularly useful in large-scale projects, where they can help to enforce a consistent look and feel across different parts of an application or across different applications within a company. They can be exported into different formats (like CSS, JS, XML, etc.) to be used on different platforms (web, iOS, Android, etc.).

We see more and more customer asking us to use Figma as "the source of thruth" to create these design tokens, or customers that tell us to use the design tokens that they provide by exporting them from their Figma.

There is tooling like [Tokens Studio for Figma (Figma Tokens)](https://tokens.studio/) to export design token from Figma to a JSON format, and I understood that Figma is also working on tooling to do this export.

The exported JSON can be converted to CSS variables, or the JSON can be imported into TypeScript and used as an object to Design token can be exported as CSS variables and included in the CSS code-base, or it can be used in for example [vanilla-extract — Zero-runtime Stylesheets-in-TypeScript.](https://vanilla-extract.style/)

## And XM Cloud Components?
And then there is XM Cloud Components... According to the [XM Cloud documentation]([Build components | Sitecore Documentation](https://doc.sitecore.com/xmc/en/users/xm-cloud/build-components.html)):

>XM Cloud Components is a Front End as a Service application that lets you create your brand’s style guide and build visual components in a WYSIWYG editor.

And also:

>The _Styles library_ is a design system that ensures visual consistency across all components built in XM Cloud Components. The library comes with out-of-the-box predefined [basic styles](https://doc.sitecore.com/xmc/en/users/xm-cloud/define-style-basics.html), and you are expected to build upon those to [create themes](https://doc.sitecore.com/xmc/en/users/xm-cloud/compose-themes.html) that will define your brand in all the components you build for your website.

Many questions pop up in my head...

- Why is it part of XM Cloud?
- Why is it not it's own product? It's own proposition? The styles and components you create with it can be used completely independent of XM Cloud and Pages as well... but more on that in another post.
- If we build a website we can use components created with XM Cloud Components mixed with custom built components, how do we make sure those components use the same styling? The same "design tokens"...
- And in XM Cloud Components it is possible to "bring your own components" (BYOC) to build composite components using the component builder. How do we ensure consistent styling?

So many questions, already going through my mind for months. Time to dive deeper, especially now there is documentation on XM Cloud Components, and the component designer is a bit more understandable...
