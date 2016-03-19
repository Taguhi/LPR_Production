<?php
$link=mysql_connect("localhost","root");
$mydb=mysql_select_db("lpr_production",$link)
or die("don't connect of database!");
if(isset($_POST["send"])){
    $name=$_POST["us_name"];if ($name == '') {unset($name);}
    $email=$_POST["us_email"];if ($email == '') {unset($email);}
    $msg=$_POST["us_msg"];if ($msg == '') {unset($msg);}}
$in_query="insert Into `users_messages` (`name`,`email`,`message`) VALUES ('$name','$email','$msg')";
$res=mysql_query($in_query);
unset($_POST);