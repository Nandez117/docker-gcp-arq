@extends('layouts.app')
@section('title', $viewData['title'])
@section('content')
<div class="container mt-5">
    <h2>{{ __('Listado de Humanos Farmeadores') }}</h2>
    
    <table class="table table-bordered table-striped mt-3">
        <thead>
            <tr>
                <th>{{ __('ID') }}</th>
                <th>{{ __('Nombre') }}</th>
                <th>{{ __('Aura') }}</th>
                <th>{{ __('Jerarquía') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach($viewData['humans'] as $human)
            <tr>
                <td>{{ $human->getId() }}</td>
                <td>
                    {{ $human->getName() }}
                    @if($human->getHierarchy() === 'legendario')
                        <span class="badge bg-warning text-dark">{{ __('Boff') }}</span>
                    @endif
                </td>
                <td>
                    @if($human->getHierarchy() === 'común')
                        <span style="color: blue; font-weight: bold;">{{ $human->getAura() }}</span>
                    @else
                        {{ $human->getAura() }}
                    @endif
                </td>
                <td>{{ $human->getHierarchy() }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <a href="{{ route('humans.home') }}" class="btn btn-secondary">{{ __('Volver') }}</a>
</div>
@endsection
