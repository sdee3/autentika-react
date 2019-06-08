<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function fetch(int $id = null)
    {
        if ($id) {
            return Category::find($id);
        } else {
            return Category::all();
        }
    }
}
