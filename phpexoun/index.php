<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  <h1>Exo php numéro Un</h1>
  <p>Avec l'aide de la documentation de php, faites moi une fonction php qui prend comme argument une string et un index et qui permet de retourner ou d'afficher cette string avec une majuscule à l'endex choisis. Si l'index est supérieur à la longueur de cette string la fonction prendra la dernière lettre.</p>
  <?php

    function indexToUpper($string, $index){

        $length = strlen($string);

        if($index >= $length){
            $index = $length - 1;
        }

        $string[$index] = strtoupper($string[$index]);

        echo $string . '<br/>';

    }

    indexToUpper("salut",7);
    indexToUpper("Hello world!",4);
    indexToUpper("roses are red violet are blue",10);
    indexToUpper("Haricots c'est beau la vie",4)

  ?>

</body>
</html>