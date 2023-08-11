<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        User::factory()->create();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
