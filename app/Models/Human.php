<?php

namespace App\Models;

use Database\Factories\HumanFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Human extends Model
{
    /** @use HasFactory<HumanFactory> */
    use HasFactory;

    /**
     * HUMAN ATTRIBUTES
     * $this->attributes['id'] - int - contains the human primary key (id)
     * $this->attributes['name'] - string - contains the human name
     * $this->attributes['aura'] - int - contains the human aura amount
     * $this->attributes['hierarchy'] - string - contains the human hierarchy (común, moderado, legendario)
     * $this->attributes['created_at'] - Carbon - contains the creation timestamp
     * $this->attributes['updated_at'] - Carbon - contains the update timestamp
     */
    protected $fillable = [
        'name',
        'aura',
        'hierarchy',
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function getId(): int
    {
        return $this->attributes['id'];
    }

    public function setId(int $id): void
    {
        $this->attributes['id'] = $id;
    }

    public function getName(): string
    {
        return $this->attributes['name'];
    }

    public function setName(string $name): void
    {
        $this->attributes['name'] = $name;
    }

    public function getAura(): int
    {
        return $this->attributes['aura'];
    }

    public function setAura(int $aura): void
    {
        $this->attributes['aura'] = $aura;
    }

    public function getHierarchy(): string
    {
        return $this->attributes['hierarchy'];
    }

    public function setHierarchy(string $hierarchy): void
    {
        $this->attributes['hierarchy'] = $hierarchy;
    }

    public function getCreatedAt(): ?string
    {
        return isset($this->attributes['created_at']) ? (string) $this->attributes['created_at'] : null;
    }

    public function getUpdatedAt(): ?string
    {
        return isset($this->attributes['updated_at']) ? (string) $this->attributes['updated_at'] : null;
    }

    public static function determineBattleWinner(Human $human1, Human $human2): string
    {
        if ($human1->getAura() > $human2->getAura()) {
            return '¡Ganador: '.$human1->getName().'!';
        } elseif ($human2->getAura() > $human1->getAura()) {
            return '¡Ganador: '.$human2->getName().'!';
        }

        return '¡Es un empate!';
    }
}
