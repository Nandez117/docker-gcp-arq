<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductApiStoreRequest;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductApiControllerV3 extends Controller
{
    public function index(): JsonResponse
    {
        $products = new ProductCollection(Product::all());

        return response()->json($products, 200);
    }

    public function paginate(): JsonResponse
    {
        $products = new ProductCollection(Product::paginate(5));

        return response()->json($products, 200);
    }

    public function store(ProductApiStoreRequest $request): JsonResponse
    {
        $product = new Product;
        $product->setName($request->input('name'));
        $product->setPrice($request->input('price'));
        $product->save();

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }
}
