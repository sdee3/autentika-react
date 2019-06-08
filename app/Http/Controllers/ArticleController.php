<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function fetch(string $slug = null)
    {
        if (!$slug) {
            return Article::all();
        } else {
            return Article::where('slug', $slug)->first();
        }
    }

    public function submit(Request $request)
    {
        Article::create([
            'title' => $request->title,
            'caption' => $request->caption,
            'category_id' => $request->category_id,
            'slug' => $request->slug,
            'content' => $request->content,
            'cover_url' => $request->cover_url,
        ]);

        return response()->json('Article created successfully!', 201);
    }

    public function update(string $slug, Request $request)
    {
        $article = Article::where('slug', $slug)->first();

        $article->title = $request->title;
        $article->caption = $request->caption;
        $article->category_id = $request->category_id;
        $article->cover_url = $request->cover_url;
        $article->slug = $request->slug;
        $article->content = $request->content;
        $article->save();

        return response()->json('Article updated successfully!', 200);
    }

    public function delete(string $slug)
    {
        $article = Article::where('slug', $slug)->first();
        $article->delete();

        return response()->json('Article deleted successfully!', 200);
    }
}
