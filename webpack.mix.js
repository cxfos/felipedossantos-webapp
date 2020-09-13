const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/rootSite/rootSiteApp.js', 'public/js')
   .sass('resources/sass/rootSite/rootSite.scss', 'public/css');

mix.react('resources/js/thayDayCare/thayDayCare.js', 'public/js')
   .sass('resources/sass/thayDayCare/thayDayCare.scss', 'public/css');
