<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;


    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function withTags()
    {
    $query= $this->belongsToMany(Tag::class)
    ->select(['name']);
    return $query;
    }

}