---
title: XM Cloud - first steps on building renderings with Next.js
published: false
date: '2022-11-16'
spoiler: Ok, you have access to XM Cloud, but now you want to extend the set of renderings available to design your pages. In this post I will take you on a trip to take this first steps.
description: description area in Twitter cards and open graph cards
tags: xmcloud, sitecore
canonical_url: https://www.sergevandenoever.nl/... - link for the canonical version of the content
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---

My first step is to create a copy of the out-of-the-box `RichText` component, name it `SergeText`, and export two variants from the `SergeText.tsx` file: `Default` and `MoreSerge`:

```typescript
import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type SergeTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: SergeTextProps): JSX.Element => {
  const text = props.fields ? (
    <span>
      SERGE:
      <JssRichText field={props.fields.Text} />
    </span>
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        SERGE: <span>{text}</span>
      </div>
    </div>
  );
};

export const MoreSerge = (props: SergeTextProps): JSX.Element => {
  const text = props.fields ? (
    <span>
      MORE SERGE: <JssRichText field={props.fields.Text} />
    </span>
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        MORE SERGE: <span>{text}</span>
      </div>
    </div>
  );
};
```

First issue that I encountered was that when I do a build, it return [Prettier](https://prettier.io/) errors. Prettier is an opinionated code formatter, so I installed the Visual Studio code [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and used the `Format Document` (Shift+Alt+F) command to do the formatting for me.

When the build succeeds commit the code changes to GitHub, head over to https://deploy.sitecorecloud.io/ (I still have no clue how to get to XM Cloud Deploy from https://portal.sitecorecloud.io/ using the UI).


