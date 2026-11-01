<?php

namespace App\Http\Controllers;

use App\Utils\ImageLocalStorage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ImageNotDIController extends Controller
{
    public function index(): View
    {
        $viewData = [];
        $viewData['title'] = __('Image Storage - Not DI');

        return view('imagenotdi.index')->with('viewData', $viewData);
    }

    public function save(Request $request): RedirectResponse
    {
        $imageLocalStorage = new ImageLocalStorage;
        $imageLocalStorage->store($request);

        return back();
    }
}
