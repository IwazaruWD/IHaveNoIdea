<?php

class Personne{

    private $name;
    private $age = 25;
    private $height = 171;

    public function __construct($name = "john", $age ="25", $height = "100"){

        $this->setName($name);
        $this->setAge($age);
        $this->setHeight($height);
    }



    public function setName($name){
        if(gettype($name) == "string"){
            $this->name = $name;
        }

        return $this;
    }

    public function getName(){
        return $this->name;
    }


    public function setHeight($height){
        if(is_numeric($height)){
            $this->height = $height;
        }

        return $this;
    }

    public function getHeight(){
        return $this->height;
    }

    public function setAge($age){
        if(is_numeric($age)){
            $this->age = $age;
        }

        return $this;
    }

    public function getAge(){
        return $this->age;
    }

}