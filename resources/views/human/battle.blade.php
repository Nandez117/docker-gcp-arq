@extends('layouts.app')
@section('title', $viewData['title'])
@section('content')
<div class="container text-center mt-5">
    <h2>{{ __('Batalla de Farmeo de Aura') }}</h2>
    
    @if($viewData['humans']->count() == 2)
        <div class="row mt-4">
            <div class="col-md-5">
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h3>{{ $viewData['humans'][0]->getName() }}</h3>
                        <p class="fs-4">{{ __('Aura') }}: {{ $viewData['humans'][0]->getAura() }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2 d-flex align-items-center justify-content-center">
                <h1 class="text-danger">{{ __('VS') }}</h1>
            </div>
            <div class="col-md-5">
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h3>{{ $viewData['humans'][1]->getName() }}</h3>
                        <p class="fs-4">{{ __('Aura') }}: {{ $viewData['humans'][1]->getAura() }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-5 p-4 bg-light rounded border">
            <h2>{{ __('Resultado') }}:</h2>
            <h1 class="text-success">{{ $viewData['winnerMessage'] }}</h1>
        </div>
    @else
        <div class="alert alert-warning mt-4">
            <h3>{{ $viewData['winnerMessage'] }}</h3>
            <p>{{ __('Se necesitan al menos 2 humanos registrados en la base de datos para iniciar una batalla.') }}</p>
        </div>
    @endif
    
    <div class="mt-4">
        <a href="{{ route('humans.home') }}" class="btn btn-secondary">{{ __('Volver') }}</a>
    </div>
</div>
@endsection
