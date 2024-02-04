---
title: Sitecore SXA theme investigation
date: '2020-02-04'
spoiler: To understand the way Sitecore Experience Accelerator (SXA) works, how components are built and theming is done you need to do some deep-diving. In this blog post I describe the best way to do this deep dive using the creative exchange.
---

"Web development teams use Sitecore Experience Accelerator (SXA) to speed up the production of websites and to reuse components, layouts, and templates across a variety of sites."

The [Sitecore SXA themes](https://doc.sitecore.com/developers/sxa/93/sitecore-experience-accelerator/en/the-sxa-themes.html) system plays an important role in the power of SXA. An SXA theme can be about the styling of your web site, but it is also a mechanism to deliver pieces of functionality. Sitecore SXA comes with a large collection of [base themes](https://doc.sitecore.com/developers/sxa/93/sitecore-experience-accelerator/en/the-base-themes.html) for functionality like maps, search and analytics. There are also base themes that are specific to support for example the editing of components in the Experience Editor.

Reading the source code of themes is a great way to learn how Sitecore itself is building components, and what libraries are included by default when working with SXA.

The problem is: clicking through the themes in the Sitecore Content Editor (`/sitecore/media library/Base Themes` and /`sitecore/media library/Themes`) don't reveal much because you can't see the code in the files and you have to guess the file extension by looking at the icon.

# Exporting a theme with its base themes using Creative Exchange

The best way to get your hands on the code is by [creating a SXA site](https://doc.sitecore.com/developers/sxa/93/sitecore-experience-accelerator/en/create-a-tenant-and-a-site.html) for example **CreativeExchangeExport** on the Virtual folder **/CreativeExchangeExport**, on the select all modules, select the "Create a new theme" checkbox and name your new theme **CreativeExchangeExportTheme**, and selecting for example the **Bootstrap 4** grid system. (Note that if you forgot to set the Virtual folder, you can go to the item `/sitecore/content/SergeTenant/CreativeExchangeExport/Settings/Site Grouping/CreativeExchangeExport` to set **Virtual Folder** to `/CreativeExchangeExport`, other nice thing to set is the **Database** to `master` so you don't have to publish on your developer box).

Now right-click of the **Home** item in the Sitecore Content Editor and select **Experience Editor** and select the **EXPERIENCE ACCELERATOR** tab.

First press the **Theme** button in the top bar and select for **Default** the new created **CreativeExchangeExportTheme**. Now move over to the **Creative Exchange** section and select **Export**. Keep the default settings to export the whole site as an _Agency drop_ to a zip file.

In the File Explorer right-click on the zip file, select **Properties** and select the **Unblock** checkbox.

Unzip this file to a location to keep as reference, open the root folder in Visual Studio Code and start exploring!

Note that an export of the **Wireframe** theme is interesting to investigate as well!

# How themes build on each other

If you select **Preview** on the Home page in the Experience Editor, do a right-click and select **View page source** you will see what happens.

The head contains the css files loaded in the following order:

```
/-/media/Feature/Experience-Accelerator/Bootstrap-4/Bootstrap-4/Styles/optimized-min.css
/-/media/Base-Themes/Core-Libraries/styles/optimized-min.css/-/media/Base-Themes/Main-Theme/styles/optimized-min.css
/-/media/Themes/SergeTenant/CreativeExchangeExport/CreativeExchangeExportTheme/styles/pre-optimized-min.css 
```

At the end of the body the following js files are loaded in the following order:

```
/-/media/Base-Themes/Core-Libraries/scripts/optimized-min.js
/-/media/Base-Themes/XA-API/Scripts/optimized-min.js
/-/media/Base-Themes/Main-Theme/scripts/optimized-min.js
/-/media/Base-Themes/Google-Maps-JS-Connector/Scripts/optimized-min.js
/-/media/Base-Themes/Maps/Scripts/optimized-min.js
/-/media/Base-Themes/SearchTheme/Scripts/optimized-min.js
/-/media/Base-Themes/Components-Theme/Scripts/optimized-min.js
/-/media/Base-Themes/Resolve-Conflicts/Scripts/optimized-min.js
```

Note that there is css file `pre-optimized-min.css` for your new created theme, but no js file `pre-optimized-min.js`. This file will appear when you add JavaScript files to your theme in the **scripts** folder.

Sitecore uses a mechanism called [Asset Optimizer](https://doc.sitecore.com/developers/sxa/93/sitecore-experience-accelerator/en/the-asset-optimizer.html) to combine all JavaScript files in the scripts folder into an optimized and minified file.

From the Asset Optimzer documentation page:

_Add aodisable=1 to the query string to turn off asset optimization for a request. For some SXA versions, to be able to use aodisable=1, you might have to enable the XA.Foundation.Theming.AssetsOptimizationSwitch.Enabled setting in the Sitecore.XA.Foundation.Theming.config file._

On my system this file is located at `C:\inetpub\wwwroot\sergesc.dev.local\App_Config\Modules\SXA\Foundation\Sitecore.XA.Foundation.Theming.config`, and toggling this switch on your developer box is a great thing to do to get more insights in what scripts are loaded.

I could not get it working so I disabled the Asset Optimizer completely on my developer box by setting at `/sitecore/system/Settings/Foundation/Experience Accelerator/Theming/Optimiser` the **Mode** for both **Scripts** and **Styles** to `Disabled`.

Now navigate to the homepage of your website in an incognito browser window so no Experience Editor files are loaded (view-source:https://sergesc.dev.local/CreativeExchangeExport).

This results in the loading of the following CSS files:

```
/sitecore/shell/-/media/Feature/Experience-Accelerator/Bootstrap-4/Bootstrap-4/Styles/bootstrap-grid.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/mediaelementplayer.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/mediaelementplayer-legacy.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/font-awesomemin.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/fullcalendar.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/jquerymCustomScrollbar.css
/sitecore/shell/-/media/Base-Themes/Core-Libraries/styles/jquery-ui.css
/sitecore/shell/-/media/Base-Themes/Main-Theme/styles/author.css
/sitecore/shell/-/media/Base-Themes/Main-Theme/styles/core.css
/sitecore/shell/-/media/Base-Themes/Main-Theme/styles/file-type-icons.css
/sitecore/shell/-/media/Base-Themes/Main-Theme/styles/grayscale-mode.css
/sitecore/shell/-/media/Base-Themes/Main-Theme/styles/reset.css
/sitecore/shell/-/media/Themes/SergeTenant/CreativeExchangeExport/CreativeExchangeExportTheme/styles/pre-optimized-min.css
```

and the following JavaScript files (I removed the `/creativeexchangeexport/-/media/Base-Themes/` prefix):

```
Core-Libraries/scripts/ie-origin-fix.js
Core-Libraries/scripts/xaquery.js
Core-Libraries/scripts/moment.js
Core-Libraries/scripts/lo-dash.js
Core-Libraries/scripts/modernizr.js
Core-Libraries/scripts/galleria-157.js
Core-Libraries/scripts/fullcalendar.js
Core-Libraries/scripts/gcal.js
Core-Libraries/scripts/jqueryuitouch-punchmin.js
Core-Libraries/scripts/hammer.js
Core-Libraries/scripts/backbone-min.js
Core-Libraries/scripts/typeahead.js
Core-Libraries/scripts/jquerymCustomScrollbar.js
Core-Libraries/scripts/flash-polyfill.js
Core-Libraries/scripts/mediaelement-and-player.js
Core-Libraries/scripts/dailymotion.js
Core-Libraries/scripts/facebook.js
Core-Libraries/scripts/soundcloud.js
Core-Libraries/scripts/twitch.js
Core-Libraries/scripts/vimeo.js
XA-API/Scripts/xa.js
Main-Theme/scripts/observer.js
Main-Theme/scripts/partial-design-highlight.js
Google-Maps-JS-Connector/Scripts/google-maps-connector.js
Maps/Scripts/component-location-service.js
Maps/Scripts/component-map.js
SearchTheme/Scripts/component-location-service.js
SearchTheme/Scripts/component-search.js
SearchTheme/Scripts/component-search-ajax.js
SearchTheme/Scripts/component-search-base-model.js
SearchTheme/Scripts/component-search-base-view.js
SearchTheme/Scripts/component-search-box.js
SearchTheme/Scripts/component-search-facet-data.js
SearchTheme/Scripts/component-search-facet-summary.js
SearchTheme/Scripts/component-search-facet-dropdown.js
SearchTheme/Scripts/component-search-facet-managed-range.js
SearchTheme/Scripts/component-search-facet-range-slider.js
SearchTheme/Scripts/component-search-facet-slider.js
SearchTheme/Scripts/component-search-load-more.js
SearchTheme/Scripts/component-search-location-filter.js
SearchTheme/Scripts/component-search-page-selector.js
SearchTheme/Scripts/component-search-page-size.js
SearchTheme/Scripts/component-search-parameters.js
SearchTheme/Scripts/component-search-query.js
SearchTheme/Scripts/component-search-radius-filter.js
SearchTheme/Scripts/component-search-results.js
SearchTheme/Scripts/component-search-results-count.js
SearchTheme/Scripts/component-search-results-filter.js
SearchTheme/Scripts/component-search-sort.js
SearchTheme/Scripts/component-search-url.js
SearchTheme/Scripts/component-search-variant-filter.js
SearchTheme/Scripts/component-search-service.js
SearchTheme/Scripts/component-search-router.js
SearchTheme/Scripts/component-search-facet-daterange.js
Components-Theme/Scripts/accessibility.js
Components-Theme/Scripts/component-accordions.js
Components-Theme/Scripts/component-archive.js
Components-Theme/Scripts/component-breadcrumb.js
Components-Theme/Scripts/component-carousel.js
Components-Theme/Scripts/component-container.js
Components-Theme/Scripts/component-disqus.js
Components-Theme/Scripts/component-facebook.js
Components-Theme/Scripts/component-flash.js
Components-Theme/Scripts/component-flip.js
Components-Theme/Scripts/component-fullcalendar.js
Components-Theme/Scripts/component-galleria.js
Components-Theme/Scripts/component-language-selector.js
Components-Theme/Scripts/component-navigation.js
Components-Theme/Scripts/component-overlay.js
Components-Theme/Scripts/component-snippet.js
Components-Theme/Scripts/component-social.js
Components-Theme/Scripts/component-tabs.js
Components-Theme/Scripts/component-toggle.js
Components-Theme/Scripts/component-video.js
Components-Theme/Scripts/component-video-playlist.js
Components-Theme/Scripts/details-polyfill.js
Components-Theme/Scripts/fixheight.js
Components-Theme/Scripts/search-fixheight.js
Resolve-Conflicts/Scripts/resolveconflicts.js
```

Some further investigations reveals that the file `xaquery.js` contains **jQuery** version 3.1.1. Also interesting is that libraries like **knockout**, **moment** (version 2.20.1) and **lodash** (version 1.8.3) are available, amongst many others.

Happy hunting!

