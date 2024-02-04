import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export const MyDocSearch = () =>
    <DocSearch
        appId='ULMMB4U4HW'
        apiKey='4de30d1138cc009d6a8b1adeb846622e'
        indexName='sergevandenoever'
        placeholder='Search Serge&apos;s blogposts'
        resultsFooterComponent={({ state }) =>
            <>
                <div style={{ textAlign: "center" }}>
                    <div style={{color: "black", marginBottom: "20px"}}><strong>{state.context.nbHits} hits found</strong></div>
                    <video style={{ width: "100%", borderRadius: "5%" }} playsinline="" autoplay="" muted="" loop="" poster="https://www.fanvanmoof.com/video/S3-still.webp"><source src="https://www.fanvanmoof.com/video/S3.mp4" /></video>
                    Want to buy a VanMoof Electric bike?<br />
                    Use <a href="https://www.fanvanmoof.com/" target="_blank">my referral code</a> to get<br />
                    <strong>€100/$100/£95 discount</strong><br />
                    on accessories or Peace of Mind coverage
                </div>
            </>
        }
    />;