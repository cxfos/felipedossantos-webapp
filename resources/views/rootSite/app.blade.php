<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Felipe dos Santos</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset(mix('/css/rootSiteApp.css')) }}" rel="stylesheet">
  </head>
  <body>
    <div id="root_site_app"></div>

    <script src="{{ asset(mix('/js/vendor-common.js'))}}"></script>
    <script src="{{ asset(mix('/js/vendor-rootSiteApp.js'))}}"></script>
    <script src="{{ asset(mix('/js/rootSiteApp.js'))}}"></script>
  </body>
</html>
