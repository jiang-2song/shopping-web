<?php
     require "conn.php";
     if(isset($_POST['name'])||isset($_POST['submit'])){
     	$username=@$_POST['name'];
     }else{
     	exit('非法操作');
     }
     
     $query="select * from letian where username='$username'";
     $result=mysql_query($query);
     
     if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
	if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$user=$_POST['username'];
		$pass=$_POST['password'];
		$telp=$_POST['telphone'];
		$query="insert letian(username,password,tel) values('$user','$pass','$telp')";
		mysql_query($query);
	}
?>