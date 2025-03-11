<?php

use App\Http\Controllers\AdherentController;
use App\Http\Controllers\DisciplineController;
use App\Http\Controllers\PaiementController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('adherents', AdherentController::class);
    Route::apiResource('disciplines', DisciplineController::class);
    Route::apiResource('paiements', PaiementController::class);
});