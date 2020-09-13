<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Thay Day Care</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset('css/thayDayCare.css') }}" rel="stylesheet">
  </head>
  <body>
    <div id="thay_daycare_app"></div>

    <script src="{{ asset('js/thayDayCare.js')}}"></script>
  </body>
</html>
