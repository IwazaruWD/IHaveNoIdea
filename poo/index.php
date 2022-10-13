<?php 

spl_autoload_register(function($class){
    include $class . ".php";
});

$car = new Car();
//$car->gasType = "essence"; ne jamais faire ça
$car->setWheelsNumber(5);

$personA = new Personne("Cassandra", 20, 165);
$personB = new Personne("Léo", 30, 175);
$personC = new Personne();
// $personA->setName("Cassandra");

// $personB->setName("Léo");
// $personB->setAge(30);
// $personB->setHeight(175);

$rectangle = new Rectangle(5, 10);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
</head>
<body>
    <h1 class="center-align">POO: Programmation Orientée Objet</h1>
    <hr>
    <h2 class="center-align"><?= $car->gasType ?></h2>
    <!-- <h2 class="center-align"><?= $car->gasType ?></h2> Ne peut pas le lire car ceci est un attribut privé -->
    <h2 class="center-align">
        <?php  $car->Information(); ?>
    </h2>
    <h2 class="center-align"><?= "Cette voiture a " . $car->getWheelsNumber() . " roues." ?></h2>
    <hr>
    <h2 class="center-align"><?= $personA->getName() . " a " . $personA->getAge() . " ans et mesure " . $personA->getHeight() . " cm." ; ?></h2>
    <h2 class="center-align"><?= $personB->getName() . " a " . $personB->getAge() . " ans et mesure " . $personB->getHeight() . " cm." ; ?></h2>
    <h2 class="center-align"><?= $personC->getName() . " a " . $personC->getAge() . " ans et mesure " . $personC->getHeight() . " cm." ; ?></h2>
    <hr>
    <h2 class="center-align"><?= "un rectangle de longueur 10 cm et de largeur 5 cm a un périmètre de " . $rectangle->getPerimetre() . " cm  et une aire de " . $rectangle->getAire() . "cm<sup>2</sup>" ?></h2>
    
</body>
</html>