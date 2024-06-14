<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

Route::get('/', function () {
    return view('index');
});
Route::post('/', [OrderController::class, 'store'])->name('order.store');
