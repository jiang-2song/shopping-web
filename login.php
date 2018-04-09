<?php
       require "conn.php";
       if(isset($_POST['name'])){
       	$username=$_POST['name'];
       	$password=$_POST['pass'];
       }else{
       	exit('非法操作');
       }
       
       $query="select * from letian where username='$username' and password='$password'";
       $result=mysql_query($query);
       
       if(mysql_fetch_array($result)){
       	echo true;
       }else{
       	echo false;
       }
?>