<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

class Comment extends Model
{
    use HasFactory;

    /**
     * COMMENT ATTRIBUTES
     * $this->attributes['id'] - int - contains the primary key (id)
     * $this->attributes['description'] - string - contains the comment description
     * $this->attributes['product_id'] - int - contains the associated product id
     * $this->attributes['created_at'] - Carbon - contains the creation timestamp
     * $this->attributes['updated_at'] - Carbon - contains the update timestamp
     * $this->product - Product - contains the associated Product
     */
    protected $fillable = ['description', 'product_id'];

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function getId(): int
    {
        return $this->attributes['id'];
    }

    public function setId(int $id): void
    {
        $this->attributes['id'] = $id;
    }

    public function getDescription(): string
    {
        return $this->attributes['description'];
    }

    public function setDescription(string $description): void
    {
        $this->attributes['description'] = $description;
    }

    public function getProductId(): int
    {
        return $this->attributes['product_id'];
    }

    public function setProductId(int $productId): void
    {
        $this->attributes['product_id'] = $productId;
    }

    public function getCreatedAt(): ?string
    {
        return isset($this->attributes['created_at']) ? (string) $this->attributes['created_at'] : null;
    }

    public function getUpdatedAt(): ?string
    {
        return isset($this->attributes['updated_at']) ? (string) $this->attributes['updated_at'] : null;
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function getProduct(): Product
    {
        return $this->product;
    }

    public function setProduct(Product $product): void
    {
        $this->product = $product;
    }
}
