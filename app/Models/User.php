<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * USER ATTRIBUTES
     * $this->attributes['id'] - int - contains the user primary key (id)
     * $this->attributes['name'] - string - contains the user name
     * $this->attributes['email'] - string - contains the user email
     * $this->attributes['password'] - string - contains the user hashed password
     * $this->attributes['remember_token'] - string - contains the remember token
     * $this->attributes['created_at'] - Carbon - contains the creation timestamp
     * $this->attributes['updated_at'] - Carbon - contains the update timestamp
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

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

    public function getEmail(): string
    {
        return $this->attributes['email'];
    }

    public function setEmail(string $email): void
    {
        $this->attributes['email'] = $email;
    }

    public function getPassword(): string
    {
        return $this->attributes['password'];
    }

    public function setPassword(string $password): void
    {
        $this->attributes['password'] = $password;
    }

    public function getRememberToken(): ?string
    {
        return isset($this->attributes['remember_token']) ? (string) $this->attributes['remember_token'] : null;
    }

    public function setRememberToken(?string $rememberToken): void
    {
        $this->attributes['remember_token'] = $rememberToken;
    }

    public function getCreatedAt(): ?string
    {
        return isset($this->attributes['created_at']) ? (string) $this->attributes['created_at'] : null;
    }

    public function getUpdatedAt(): ?string
    {
        return isset($this->attributes['updated_at']) ? (string) $this->attributes['updated_at'] : null;
    }
}
