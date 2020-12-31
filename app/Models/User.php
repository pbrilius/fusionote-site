<?php

use CodeIgniter\Model;
use App\Entities\UserEntity;

namespace App\Models\User;

class UserModel extends Model
{
  protected $table = 'users';
  protected $primaryKey = 'user_id';

  protected $returnType = UserEntity::class;
  protected $useSoftDeletes = true;

  protected $allowedFields = [
    'name',
    'email',
  ];

  protected $useTimeStamps = true;
}
