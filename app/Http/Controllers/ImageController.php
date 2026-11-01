<?php

namespace App\Http\Controllers;

use App\Interfaces\ImageStorage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ImageController extends Controller
{
    public function index(): View
    {
        $viewData = [];
        $viewData['title'] = __('Image Storage - DI');

        return view('image.index')->with('viewData', $viewData);
    }

    public function save(Request $request): RedirectResponse
    {
        $storeInterface = app(ImageStorage::class);
        $storeInterface->store($request);

        return back();
    }
}
