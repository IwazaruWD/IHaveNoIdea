<?php
    session_start();


  $bonjour = "bonjour";

  $nbrA = 4;
  $nbrB = 5;

  $nbrC = $nbrA + $nbrB;

  $array = [1, 2,"je suis perdu au milieu des chiffres", 3, 4];
  $associativeArray = ["Jean-marc" => 4, "Alphonse" => 6, "Germaine" => 5];

  $associativeArray["Jean-marc"] = "Kévin";
  
  $variableNull = NULL;
  echo '<pre>';
  var_dump($array);
  echo '</pre>';
  $undefined;

  $fruits = ["pomme", "Banane", "kiwi", "tomate"];

  $cars = array("Dacia", "Ford", "honda", "bmw");

    $fruits = array();
  
  if(!isset($undefined)){
    $undefined = 120;
  }

  echo $undefined;
  
  echo '<pre>';
  var_dump($fruits);
  var_dump($cars);

  echo '</pre>';
  
  // empty check if the var is equal to 0, 0.0, "0", "", null, false, undefined, array()
  if(empty($variableNull)){
    echo "Cette variable est vide<br/>";
  }

  $cacher = true;

//   for($i = 1; $i <= 50; $i++){
//     echo $i . ' kilomètres à pieds ça use ça use.<br>';
//     echo $i . ' kilomètres à pieds ça use les souliers.<br>';
//   }

// Superglobales
echo '<pre>';
//  var_dump($_SERVER["SERVER_NAME"]);
//  var_dump($_POST);
//  var_dump($_GET);
//  var_dump($_FILES);
//  var_dump($GLOBALS);
 var_dump($_SESSION);
 var_dump($_COOKIE);
 var_dump($_REQUEST);
 echo '</pre>';

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

    <h1><?php echo $bonjour; ?></h1>
    <h2><?php echo $nbrA . " + " . $nbrB . " = " . $nbrC; ?></h2>
    <h2><?php  echo $associativeArray["Jean-marc"];   ?></h2>
    <h2><?php echo implode("PIG",$associativeArray) ?></h2>
    <h2><?php echo $nbrB == 4 ? "C'est un nombre 4." : "Ce n'est pas un nombre 4."; ?></h2>
   
    <p class="<?php echo $cacher ? "cacher" : "";?>">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum et laboriosam nostrum consectetur aliquam aperiam maxime molestias laborum ratione facere, ea deserunt, officiis dolore quisquam vel magnam! Illo, dolores.</p>

    
</body>
</html>



