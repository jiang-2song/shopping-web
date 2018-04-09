<?php
    require "left.php";
    $query='select * from song';
    $result=mysql_query($query);
    //print($result);
    $arr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
    	$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    };
    //echo json_encode($arr);
   $query2='select * from jiang';
    $result2=mysql_query($query2);
    $arr1=array();
    for($i=0;$i<mysql_num_rows($result2);$i++){
    	$arr1[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
    }
    //echo json_encode($arr1);
    
    $query3='select * from wang';
    $result3=mysql_query($query3);
    $arr2=array();
    for($i=0;$i<mysql_num_rows($result3);$i++){
    	$arr2[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
    }
    //echo json_encode($arr2);
    
     $query4='select * from adv';
    $result4=mysql_query($query4);
    $arr3=array();
    for($i=0;$i<mysql_num_rows($result4);$i++){
    	$arr3[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
    }
    //echo json_encode($arr3);
    
     $query5='select * from yu';
    $result5=mysql_query($query5);
    $arr4=array();
    for($i=0;$i<mysql_num_rows($result5);$i++){
    	$arr4[$i]=mysql_fetch_array($result5,MYSQL_ASSOC);
    }
     
    $query6='select * from smaill';
    $result6=mysql_query($query6);
    $arr5=array();
    for($i=0;$i<mysql_num_rows($result6);$i++){
    	$arr5[$i]=mysql_fetch_array($result6,MYSQL_ASSOC);
    }
    
    
     $query7='select * from big';
    $result7=mysql_query($query7);
    $arr6=array();
    for($i=0;$i<mysql_num_rows($result7);$i++){
    	$arr6[$i]=mysql_fetch_array($result7,MYSQL_ASSOC);
    }
    
     $query8='select * from hang';
    $result8=mysql_query($query8);
    $arr7=array();
    for($i=0;$i<mysql_num_rows($result8);$i++){
    	$arr7[$i]=mysql_fetch_array($result8,MYSQL_ASSOC);
    }
    
    
     $query9='select * from info';
    $result9=mysql_query($query9);
    $arr8=array();
    for($i=0;$i<mysql_num_rows($result9);$i++){
    	$arr8[$i]=mysql_fetch_array($result9,MYSQL_ASSOC);
    }
    
     $shop='select * from shipin';
    $present=mysql_query($shop);
    $arr9=array();
    for($i=0;$i<mysql_num_rows($present);$i++){
    	$arr9[$i]=mysql_fetch_array($present,MYSQL_ASSOC);
    }
    
     $japan='select * from japan';
    $japanese=mysql_query($japan);
    $arrj=array();
    for($i=0;$i<mysql_num_rows($japanese);$i++){
    	$arrj[$i]=mysql_fetch_array($japanese,MYSQL_ASSOC);
    }
    
    $cana='select * from canada';
    $can=mysql_query($cana);
    $arrc=array();
    for($i=0;$i<mysql_num_rows($can);$i++){
    	$arrc[$i]=mysql_fetch_array($can,MYSQL_ASSOC);
    }
    
     $land='select * from thai';
    $thailand=mysql_query($land);
    $arrt=array();
    for($i=0;$i<mysql_num_rows($thailand);$i++){
    	$arrt[$i]=mysql_fetch_array($thailand,MYSQL_ASSOC);
    }
    
    class index{
    	
    }
    $d=new index();
    
    $d->pic1=$arr;
    
    $d->pic2=$arr1;
    
    $d->pic3=$arr2;
    
    $d->pic4=$arr3;
    
    $d->pic5=$arr4;
    
    $d->pic6=$arr5;
    
    $d->pic7=$arr6;
    
    $d->pic8=$arr7;
    
    $d->pic9=$arr8;
    
    $d->mac=$arr9;
    
    $d->jap=$arrj;
    
    $d->candian=$arrc;
    
     $d->thailan=$arrt;
    
    echo json_encode($d);
?>