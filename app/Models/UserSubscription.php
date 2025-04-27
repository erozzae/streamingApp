<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'subscription_id',
        'price',
        'expired_date',
        'payment_status',
        'snapToken'
    ];

    public function subscriptionPlan(){
        return $this->belongsTo(SubscriptionPlan::class, 'subscription_id');
    }

}
