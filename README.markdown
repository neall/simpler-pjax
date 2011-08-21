# simpler pjax

Right now this code is too simple to be useful, except to show how the pjax
technique works. For instance, it doesn't even check weather history.pushState
is supported. For a more complete library, check out [Chris Wanstrath's
jquery-pjax library][pjax].

That said, if you're looking to understand how pjax works just take a look at
`public/pjaxify.js`. At just 23 non-golfed lines of code, plus some comments,
it's hopefully easier to follow. I think the pjax technique works best when
you customize it to the needs of your site. Here I send a title and some
markup down the wire in JSON, but you could easily imagine sending multiple
blocks of markup (for different sections of the page) and handling the
transitions more gracefully (like having a "loading" spinner).

[pjax]: https://github.com/defunkt/jquery-pjax
