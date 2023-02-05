# Wikipedia + IMDB to Letterboxd Search

## Overview

This is a simple Chrome extension that takes whatever Wikipedia/IMDB page you are on and sends you to Letterboxd search. I wrote this primarily to be able to add stuff to my watchlist easier.

## Instructions

1. Go to a page, e.g. https://www.imdb.com/title/tt0068646/ or https://en.wikipedia.org/wiki/The_Godfather
2. Click the little button in your extension bar.
3. It does a search in Letterboxd for that movie. You can then add it to your watchlist or whatever.

Note: I dunno if this works on other sites. I am using a pretty crude string replacement, so I doubt it?

## Options

There's only one option. You can set whether or not you want the extension to open a new tab or change your current tab. The reason for this is a Chrome bug:

https://bugs.chromium.org/p/chromium/issues/detail?id=1299067

I originally had it set so that it changes your tab, but I found it annoying that you can't go "back" to Wikipedia if you want. But others might not care.

## How to install

Standard unpacked Chrome extension instructions:

https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked

If you haven't done it before, basically you're just pointing Chrome at a folder.
