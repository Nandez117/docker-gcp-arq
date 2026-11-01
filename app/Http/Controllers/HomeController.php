<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        $viewData = [];
        $viewData['title'] = __('Home Page - Online Store');

        return view('home.index')->with('viewData', $viewData);
    }

    public function about(): View
    {
        $viewData = [];
        $viewData['title'] = __('About us - Online Store');
        $viewData['subtitle'] = __('About us');
        $viewData['description'] = 'This is an about page ...';
        $viewData['author'] = 'Developed by: Your Name';

        return view('home.about')->with('viewData', $viewData);
    }

    public function contact(): View
    {
        $viewData = [];
        $viewData['title'] = __('Contact - Online Store');
        $viewData['subtitle'] = __('Contact us');
        $viewData['name'] = 'Daniel Correa';
        $viewData['address'] = 'Cl. 4 Sur # 43 - 100, El Poblado, Medellín, Antioquia';
        $viewData['phone'] = '+57 300 000 0000';

        return view('home.contact')->with('viewData', $viewData);
    }
}
