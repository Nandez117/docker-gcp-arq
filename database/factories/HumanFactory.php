<?php

namespace Database\Factories;

use App\Models\Human;
use Illuminate\Database\Eloquent\Factories\Factory;

class HumanFactory extends Factory
{
    protected $model = Human::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'aura' => fake()->numberBetween(100, 10000),
            'hierarchy' => fake()->randomElement(['común', 'moderado', 'legendario']),
        ];
    }
}

