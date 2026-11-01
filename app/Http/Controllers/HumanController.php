<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHumanRequest;
use App\Models\Human;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class HumanController extends Controller
{
    public function home(): View
    {
        $viewData = [];
        $viewData['title'] = __('Zona de Inicio - Humanos');

        return view('human.home')->with('viewData', $viewData);
    }

    public function create(): View
    {
        $viewData = [];
        $viewData['title'] = __('Registrar Humano');

        return view('human.create')->with('viewData', $viewData);
    }

    public function store(StoreHumanRequest $request): RedirectResponse
    {
        $human = new Human;
        $human->setName($request->input('name'));
        $human->setAura($request->input('aura'));
        $human->setHierarchy($request->input('hierarchy'));
        $human->save();

        return redirect()->route('humans.create')->with('success', 'Humano registrado exitosamente.');
    }

    public function index(): View
    {
        $viewData = [];
        $viewData['title'] = __('Lista de Humanos');
        $viewData['humans'] = Human::orderBy('aura', 'desc')->get();

        return view('human.index')->with('viewData', $viewData);
    }

    public function battle(): View
    {
        $viewData = [];
        $viewData['title'] = __('Batalla de Humanos');
        $humans = Human::orderBy('id')->take(2)->get();
        $viewData['humans'] = $humans;

        $winnerMessage = __('Faltan humanos para la batalla.');
        if ($humans->count() === 2) {
            $winnerMessage = Human::determineBattleWinner($humans[0], $humans[1]);
        }
        $viewData['winnerMessage'] = $winnerMessage;

        return view('human.battle')->with('viewData', $viewData);
    }
}
