<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'Nama_Pemesan',
        'nomor_telfon',
        'tanggal_order',
        'pilih_paket',
        'jumlah_pair_pasang',
        'expedisi',
        'alamat',
    ];
}
