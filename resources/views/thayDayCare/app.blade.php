<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Thay Day Care</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset(mix('css/thayDayCare.css')) }}" rel="stylesheet">
    <script type="text/javascript">
      var _iub = _iub || [];
      _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"lang":"en","siteId":2018010,"enableCcpa":true,"countryDetection":true,"cookiePolicyId":55220466, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-top-center" }};
    </script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stable/stub.js"></script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/stable/iubenda_cs.js" charset="UTF-8" async></script>
  </head>
  <body>
    <div id="thay_daycare_app"></div>

    <script src="{{ asset(mix('/js/vendor-common.js'))}}"></script>
    <script src="{{ asset(mix('/js/vendor-thayDayCare.js'))}}"></script>
    <script src="{{ asset(mix('/js/thayDayCare.js'))}}"></script>
  </body>
</html>
