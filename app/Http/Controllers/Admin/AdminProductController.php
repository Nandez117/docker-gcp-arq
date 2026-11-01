<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductSaveRequest;
use App\Models\Product;
use Illuminate\View\View;

class AdminProductController extends Controller
{
    public function create(): View
    {
        $viewData = [];
        $viewData['title'] = __('Create product');

        return view('product.create')->with('viewData', $viewData);
    }

    public function save(ProductSaveRequest $request): View
    {
        // Validation handled by Form Request
        Product::create($request->validated());

        $viewData = [];
        $viewData['title'] = __('Success - Online Store');
        $viewData['subtitle'] = __('Product status');

        return view('product.success')->with('viewData', $viewData);
    }
}
