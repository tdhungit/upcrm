<?php

namespace tests\unit\testData\Hooks\testCase1\application\Espo\Modules\Crm\Hooks\Note;

class Mentions extends \Espo\Hooks\Note\Mentions
{
    public static $order = 9;

    public function beforeSave(\Espo\ORM\Entity $entity)
    {

    }

}