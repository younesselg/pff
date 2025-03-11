<?php

namespace App\Http\Controllers;

use App\Models\Adherent;
use Illuminate\Http\Request;

class AdherentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Adherent::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Adherent::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Adherent $adherent)
    {
        return $adherent;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Adherent $adherent)
    {
        $adherent->update($request->all());
        return $adherent;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Adherent $adherent)
    {
        $adherent->delete();
        return response()->json(['message' => 'Adherent supprime!']);
    }
}
