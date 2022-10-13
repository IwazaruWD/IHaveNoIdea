<?php

class Car
{
    private $wheelsNumber = 4;
    private $motorPower = 90;
    public $gasType = "diesel";

    public function Information()
    {
        echo "Cette voiture a "  . $this->wheelsNumber . " roues, elle a un moteur de " . $this->motorPower . " chevaux.";
    }

    public function getWheelsNumber(){
        return $this->wheelsNumber;
    }

    public function setWheelsNumber($wheelsNumber){

            if(is_numeric($wheelsNumber)){
                $this->wheelsNumber = $wheelsNumber;
            }
            
             
    }

    public function getMotorPower(){
        return $this->motorPower;
    }

    public function setMotorPower($motorPower){

            
            if(is_numeric($motorPower)){
                $this->motorPower = $motorPower;
            }
             
    }
    
}