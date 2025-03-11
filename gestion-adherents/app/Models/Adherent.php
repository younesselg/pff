<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adherent extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'email', 'mot_de_passe', 'disciplines'];

    protected $casts = [
        'disciplines' => 'array',
    ];
}
