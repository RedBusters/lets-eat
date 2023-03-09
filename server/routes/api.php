<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArticleController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/short/{id}', [ArticleController::class, 'short']);
Route::get('/newest/{nb}', [ArticleController::class, 'newest'] );
Route::get('/byTag/{tag}', [ArticleController::class, 'getArticlesByTag'] );
Route::post('/search/{search}', [ArticleController::class, 'search']);



Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/logout',  [AuthController::class, 'logout']);

    Route::get('/user',  function (Request $request) {
                                return $request->user();
                         });
    Route::get('/article/{id}', [ArticleController::class, 'getArticle'])->where('id', '[0-9]+'); // get an article
    
});

Route::group( ['middleware' => ['auth:sanctum', 'admin']], function () {
    Route::delete('/article/delete/{id}', [ArticleController::class, 'removeArticle']); // delete an article
    Route::post('/article/add', [ArticleController::class, 'addArticle']); // edit an article
    Route::post('/article/edit/{id}', [ArticleController::class, 'editArticle']); // add an article

    Route::post('/article/{id}/tags', [ArticleController::class, "addTags"]);
    Route::delete('/article/{id}/tags/{tagID}', [ArticleController::class, "RemoveTags"] );

}



);

