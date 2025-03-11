<?php

namespace App\Http\Controllers;

use App\Models\Paiement;
use Illuminate\Http\Request;

class PaiementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Paiement::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Paiement::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Paiement $paiement)
    {
        return $paiement;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paiement $paiement)
    {
        $paiement->update($request->all());
        return $paiement;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paiement $paiement)
    {
        $paiement->delete();
        return response()->json(['message' => 'Paiement supprimee!']);
    }
}
