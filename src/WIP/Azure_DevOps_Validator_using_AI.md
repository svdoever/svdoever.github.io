---
title: Azure DevOps Validator using AI
published: false
date: 2024-05-17
spoiler: A not-to-short spoiler line.
description: description area in Twitter cards and open graph cards
image: external image URL, starting with https:// - store at https://imgbb.com/
tags:
  - max
  - of
  - four
  - tags
  - needs
  - to
  - be
  - comma-separated
canonical_url: https://www.sergevandenoever.nl/... - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
If you have your backlog, how do you know the shape of your backlog when it grows big? Do PBIs have a good description, are acceptance criteria available, does it follow the proposed PBI template?

How nice would it be if we could collect all work items in our DevOps project, and for each work item check the quality, and propose improvements.

Well, lets try...

## Collecting the required information from DevOps
First step if to get information from DevOps. If we want to automate this, we can do this by using the Azure DevOps REST API to fetch all work items and their details. To call the REST API we need the following information:

- A Personal Access Token (PAT)
- The name of the Azure DevOps organization
- The name of the Azure DevOps project


