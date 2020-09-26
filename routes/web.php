<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/privacy-policy', function () {
    return view('policy.privacy');
});
Route::get('/cookie-policy', function () {
    return view('policy.cookie');
});

Route::get('/', function () {
    return view('rootSite.demo');
});

Route::prefix('main')->group(function () {

  Route::get('/', function () {
    return view('rootSite.app');
  });

  Route::get('{page}', function (String $page) {
    return view('rootSite.app');
  });

});

Route::prefix('admin')->group(function () {

  Route::get('/', function () {
    return view('rootSite.app');
  });

  Route::get('{page}', function (String $page) {
    return view('rootSite.app');
  });

});

Route::prefix('thaydaycare')->group(function () {

  Route::get('/', function () {
    return view('thayDayCare.app');
  });

  Route::get('{page}', function (String $page) {
    return view('thayDayCare.app');
  });

});
