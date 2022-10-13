<?php

class Rectangle{

    private $longueur;
    private $largeur;
    

    public function __construct($longueur, $largeur){
        $this->longueur = $longueur;
        $this->largeur = $largeur;
    }

    public function getPerimetre(){
        return ($this->longueur  + $this->largeur) * 2;
    }

    public function getAire(){
        return $this->longueur * $this->largeur;
    }



}