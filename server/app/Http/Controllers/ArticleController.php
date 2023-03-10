<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Tag;

class ArticleController extends Controller
{

    public function search(Request $request, $search){  
        $articles = Article::whereRaw('title LIKE "%'.$search.'%"')->get();
            foreach($articles as $article){
            $tags = $article->tags;
            $article['tags'] = $tags;   
            $article->content = "";
            $article->mediaURL ="";
        }
        return $articles;

    }

    public function getArticle(Request $request) {
    
    $article = Article::where('id', $request["id"])->firstOrFail();
    $tags = $article->tags;
    $article['tags'] = $tags;
    
    
        return response()->json([$article]);
      
    }
    public function getArticlesByTag($tag){
        
        $articles = Tag::where('id', $tag)->firstOrFail()->articles ;
        
        foreach($articles as $article){
            $tags = $article->tags();
            $article['tags'] = $tags;   
            $article->content = "";
            $article->mediaURL ="";
        }
        return $articles;
    }
    public function newest($nb){
        $articles = Article::orderBy("created_at", "desc")->take($nb)->get();
        foreach($articles as $article){
            $tags = $article->tags;
            $article['tags'] = $tags;
        }
        return response()->json([$articles]);
    }

    public function addArticle(Request $request){
        $article = new Article();
        $article->title = $request->input('title');
        $article->content = $request->input('content');
        $article->thumbnailURL = $request->input('thumbnailURL');
        $article->mediaType = $request->input("mediaType");
        $article->mediaURL = $request->input("mediaURL");
        $article->leadStory = $request->input("leadStory");
        $article->save();
        return $article;
    }
    public function editArticle(Request $request,$id) {
        
        $article = Article::findOrFail($id);
        //$article = new Article();
        $article->title = $request->input('title');
        $article->content = $request->input('content');
        $article->thumbnailURL = $request->input('thumbnailURL');
        $article->mediaType = $request->input("mediaType");
        $article->mediaURL = $request->input("mediaURL");
        $article->leadStory = $request->input("leadStory");
        $article->save();
        return $article;
        //return response()->json([Article::where('id', $request["id"])->firstOrFail()]);
    }
    public function removeArticle($id) {
        return Article::findOrFail($id)->delete();
    }
    public function short(Request $request, $id){
        $article = Article::findOrFail($id);
        $article = Article::where('id', $request["id"])->firstOrFail();
        $tags = $article->tags;
        $article['tags'] = $tags;
    
        $article->content = "";
        $article->mediaURL ="";
        return response()->json([$article]);    
    }
    public function addTags(Request $request, $id){
        $validated = $request->validate([
            'tags' => 'required|string|max:255',
        ]);
        $tags = explode(" ", $request->input("tags"));
        $article = Article::findOrFail($id);
        foreach( $tags as $tag ){
            /*
              Get the tag by name or create a new tag.
            */
             $t = \App\Models\Tag::firstOrNew( array('name' => $tag ) );
             $t->save();
            $article->tags()->attach($t->id);
          }
    }

    public function removeTags($id, $tagID){
       
        
        $article = Article::findOrFail($id);
        $tag = Tag::findOrFail($tagID)->delete();
    }
}
