Squared Paper
=============

A custom boilerplate of frequently used code for quickly building or prototyping responsive web apps. Read more about the motivation behind this project [here](http://jeshua.co/squared-paper/).

##Includes by default
* [HTML5 Boilerplate](http://html5boilerplate.com/) - V4.0.2 - some of the 'fat' is trimmed
* [Twitter Bootstrap](http://twitter.github.io/bootstrap/) - V3.0.0 - mobile first styles, the new [glyphicon icon font](http://glyphicons.getbootstrap.com/) and `js/vendors/bootstrap.js`
* [Modernizr](http://modernizr.com/) - V2.6.2 - a somewhat 'joblot/everything included' build
* [jQuery](http://jquery.com/) -  V1.8.3 - cos jQuery

##Reset
I've modified the reset css from [Underscores](http://underscores.me/), a brilliant 'blank' WordPress theme. It includes flavours of three different CSS resets (listed below) handily condensed into one SASS file, `css/sass/reset.scss`.

The reset is not included by default. This is because Twitter Bootstrap has `reset.css` baked in. This reset is included should you choose not to use Twitter Bootstrap. To include it in your project, simply uncomment line 12 of `css/sass/main.scss` and recompile.
* [Reset.css](http://meyerweb.com/eric/tools/css/reset/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Blueprint.css](http://www.blueprintcss.org/)

##Responsive Design
Using SASS, it's realtively simple to implement responsive styles while keeping a maintainable codebase. There are three files (which provide two 'break points') aimed, broadly speaking, at desktop, tablet and mobile phone displays. There is also a `.scss` file which targets specific devices with varying degrees of success.

* `css/sass/desktop.scss`
* `css/sass/tablet.scss`
* `css/sass/mobile.scss`
* `css/sass/device-specific.scss` - based upon [this](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/) CSS Tricks post.

##[SASS](http://sass-lang.com/)
You can of course edit `css/main.css` to your heart's content and forget about SASS altogether. Go ahead, be my guest, see if I care.

However, if you're like me and like to save time wherever possible, you may opt to use SASS. (It's also a good excuse to whip out the terminal which is never a bad thing ;) The directory structure is designed to allow you to use SASS easily, while keeping the bulk of the files out of the way.

To get it up and running move to the `css/` directory and then fire up SASS:

	$ cd css/ && sass --watch sass/main.scss:main.css