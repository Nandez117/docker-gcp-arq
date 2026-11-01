@extends('layouts.app')
@section('title', $viewData['title'])
@section('subtitle', $viewData['subtitle'])
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="alert alert-success text-center">
                {{ __('Product created successfully!') }}
            </div>
        </div>
    </div>
</div>
@endsection
