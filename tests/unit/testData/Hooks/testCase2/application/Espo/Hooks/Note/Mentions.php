<?php

namespace tests\unit\testData\Hooks\testCase2\application\Espo\Hooks\Note;

class Mentions extends \Espo\Core\Hooks\Base
{
    public static $order = 9;

    public function beforeSave(\Espo\ORM\Entity $entity)
    {

    }
}
