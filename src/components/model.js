import { compose, replace } from 'ramda';
// import { mconcat } from 'mconcat';
import { getJSON } from 'jquery';
import { Task } from 'data.task';

const Http = {
  // get :: Url -> Task Error JSON
  get: (url) => new Task ((rej, res) => getJSON(url).error(rej).done(res))
}

//const Url = String

const baseUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=39658884f0bc3d35a50e6b50788e072c&tags={TAGS}&extras=url_s&format=json&jsoncallback=?";

// majeUrl :: Sting -> Url
const makeUrl = (t) => replace("{TAGS}", t, baseUrl)
// monade solution
//const makeUrl = (t) => {
//  {start, end} = baseUrl.split("{TAGS}")
//  return mconcat([start, t, end])
//}

// flickSearch :: String -> Task Error JSON
const flickrSearch = compose(Http.get, makeUrl)

module.exports = { flickrSearch }
