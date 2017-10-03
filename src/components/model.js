const { compose, replace, map, prop } = require('ramda');
//const { mconcat } = require('pointfree-fantasy');
const { getJSON } = require('jquery');
const Task = require('data.task');

const Http = {
  // get :: Url -> Task Error JSON
  get: (url) => new Task((rej, res) => getJSON(url).fail(rej).done(res))
}

const apiKey = '39658884f0bc3d35a50e6b50788e072c';
const baseUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&tags={TAGS}&extras=url_s&format=json&jsoncallback=?";

// majeUrl :: Sting -> Url
const makeUrl = (t) => replace("{TAGS}", t, baseUrl)
// monade solution
//const makeUrl = (t) => {
//  {start, end} = baseUrl.split("{TAGS}")
//  return mconcat([start, t, end])
//}

// exctractUrls :: JSON -> [Url]
const extractUrls = compose(map(prop('url_s')), prop('photo'), prop('photos'));

// flickSearch :: String -> Task Error [Url]
const flickrSearch = compose(map(extractUrls), Http.get, makeUrl)

module.exports = { flickrSearch }
