const { curry, append, remove, compose, replace, map, prop } = require('ramda');
const { indexOf, Http } = require('./utils');
const { fold } = require('pointfree-fantasy');
const { Some, None } = require('fantasy-options');
const daggy = require('daggy');

// const Url = String
// const Point = Number

// See Advanced -> Natural Transformation
// mayToOpt :: Maybe a -> Option a
const mayToOpt = (m) => m.cata({Just: Some, Nothing: () => None })

// Photo { src :: Url, x :: Point, y :: Point }
const Photo = daggy.tagged('src', 'x', 'y')

// newPhoto :: Url -> Photo
const newPhoto = (url) => Photo(url, 0, 0)

// api Url
const apiKey = "39658884f0bc3d35a50e6b50788e072c";
const baseUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&tags={TAGS}&extras=url_s&format=json&jsoncallback=?";

// See Advanced -> Monade
// majeUrl :: Sting -> Url
const makeUrl = (t) => replace("{TAGS}", t, baseUrl)

// toPhoto :: JSON -> [Photo]
const toPhoto = compose(map(compose(newPhoto, prop('url_s'))), prop('photo'), prop('photos'))

// flickSearch :: String -> Task Error [Photo]
const flickrSearch = compose(map(toPhoto), Http.get, makeUrl)

// indexOfPhoto :: Photo -> [Photos] -> Maybe Number
const indexOfPhoto = curry((p, ps) => indexOf(p.src, ps.map(prop('src'))) )

// See Advacend -> Fold
// replacePhoto :: Photo -> [Photo] -> [Photo]
const replacePhoto = curry((p, ps) => compose( fold(append(p), () => append(p, ps)), 
                                               mayToOpt,
                                               map(i => remove(i, 1, ps)), 
                                               indexOfPhoto(p))(ps))

module.exports = { flickrSearch, Photo, replacePhoto }
