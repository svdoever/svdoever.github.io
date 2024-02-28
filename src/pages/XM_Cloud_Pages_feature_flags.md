---
title: XM Cloud Pages - feature flags
published: true
date: 2024-02-24
spoiler: Always fun to dive into the network traffic of a web application. In this case the XM Cloud Pages editor. And what do we see? Feature flags!!
description: Always fun to dive into the network traffic of a web application. In this case the XM Cloud Pages editor. And what do we see? Feature flags!!
image: https://i.ibb.co/xCjVMPb/image.png
tags: XMCloud, Pages, FeatureFlags
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_Pages_feature_flags
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
In the preparation of writing my blog post, I do a lot of research and deep diving. I was busy trying to fix a configuration for XM Cloud Pages, and in that process I was looking at all network traffic when I came across an interesting network request done from pages to the URL https://featureflags.sitecorecloud.io/api/featureflags/v1/flags?key=pages&labelfilter=production.

From that GET request I get on my instance of Pages (at this moment) the following result back:

```json
[
    {
        "id": "pages_canvas_through_horizon",
        "description": "Render editing canvas through Horizon",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_feaas-components-regions",
        "description": "Enables render regions for FEaaS components extensions",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_fetch-feaas-components",
        "description": "Enables in house fetching FEaaS components",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_fetch-feaas-external-components",
        "description": "Enables in house fetching FEaaS external components",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_gainsight",
        "description": "Gainsight",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_inline-add-component",
        "description": "Enables inline adding of components",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_page-templates",
        "description": "Enables Page Templates feature",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_show-app-switcher",
        "description": "Show app switcher in Pages",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_show-form-analytics",
        "description": "Show Form analytics section",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_show-page-branches",
        "description": "Show page branches in Pages",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_show-templates-design-updates",
        "description": "Show the new design updates for Templates",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_super-layout-component",
        "description": "Show an editing panel for a layout container",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_sync-xmc-user",
        "description": "Sync the user with XMC user",
        "enabled": false,
        "conditions": {}
    },
    {
        "id": "pages_use-ckeditor",
        "description": "Use ckeditor for RTE field",
        "enabled": true,
        "conditions": {}
    },
    {
        "id": "pages_use-sxa-sites-api",
        "description": "Use SXA API as souce of sites",
        "enabled": true,
        "conditions": {}
    }
]
```

I tried other values for `key` (pages) and `labelfilter` (production), but could not find other values that returned other sets of feature flags. 

There are still some feature flags on false, but with a tool like [Home | Tampermonkey](https://www.tampermonkey.net/) it would be easy to do some toggle switching! I will not dive into this now, because I have enough trouble to get the topic of research up and running for one of my next blog posts, but at least this is a "reminder to self". If, in the meantime, anyone is willing to pick this one up and blog about it - it would be fun!
