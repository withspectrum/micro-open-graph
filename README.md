# `micro-open-graph`

A tiny Node.js microservice to scrape open graph data with joy.

Running this microservice you won't need a backend solely to get some meta information about links your users submit. Press the deploy button below and show your users what the links they're clicking on contain!

## Deployment

Your own `micro-open-graph` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/mxstbr/micro-open-graph)

You can also deploy with a single command from the terminal (assuming you have [`now`](https://now.sh) installed):

```sh
now mxstbr/micro-open-graph
```

## Usage

To get the data for a given URL, for example `mxstbr.blog`, simply add that URL (safely escaped) to the `url` query parameter:

```sh
https://your-url.now.sh/?url=http://mxstbr.blog
```

And you will get the parsed data in the following format:

```JSON
{
	"author": null,
	"date": "2017-02-16T11:00:00.000Z",
	"description": "Fresh thinking and expert tips about HTML, CSS, JavaScript and other web technologies.",
	"image": "http://mxstbr.blog/social_media.png",
	"publisher": "<mxstbr/>",
	"title": "<mxstbr/>",
	"url": "http://mxstbr.blog/"
}
```

> Note: Not all of this, or even more, data might be available depending on the `meta` tags the page has in its HTML. (see [`metascraper`](https://github.com/ianstormtaylor/metascraper/tree/master/lib/rules) for the full list of supported properties)

We infer the data from more places than just the open graph meta tags, we also support twitter meta tags and fallback to standard HTML tags like e.g. the `title` tag if no open graph data was specified. Results are cached in memory for 24 hours, which means calling this with the same URL repeatedly won't have a large impact on your server!

## Development

```sh
git clone git@github.com:mxstbr/micro-open-graph.git
npm run dev
```

The server will then be listening at `localhost:3000`.

## Updating

The `master` branch of this repository is what you will be deploying. To update to a new version with potential bugfixes, all you have to do is run the `now` command again and change the URL you call in your app! 👌

## License

Copyright (c) 2017 Maximilian Stoiber, licensed under the MIT license. See [LICENSE.md](LICENSE.md) for more information.
