<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ProductController extends Controller
{
    public function index(): View
    {
        $viewData = [];
        $viewData['title'] = __('Products - Online Store');
        $viewData['subtitle'] = __('List of products');
        $viewData['products'] = Product::with('comments')->get();

        return view('product.index')->with('viewData', $viewData);
    }

    public function show(string $id): View|RedirectResponse
    {
        $viewData = [];

        // Find or fail is allowed, zero Route Model Binding
        $product = Product::with('comments')->findOrFail($id);

        $viewData['title'] = $product->getName().' - '.__('Online Store');
        $viewData['subtitle'] = $product->getName().' - '.__('Product information');
        $viewData['product'] = $product;

        return view('product.show')->with('viewData', $viewData);
    }
}
