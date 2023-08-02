<?php
$a = 1; 
$b = 2;
$c = $a;
$a = $c + 2;

while($b <= 4){
    $a += $c + $b;
    echo "Running";
    $b++;
}

echo $a;