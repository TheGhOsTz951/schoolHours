<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv='cache-control' content='no-cache'> 
    <meta http-equiv='expires' content='0'> 
    <meta http-equiv='pragma' content='no-cache'> 
    <title>Orario 5AINF | AleSite</title>

    <link rel="stylesheet" href="../css/orario.css?version=9">
    <link rel="stylesheet" media="screen and (max-width: 600px)" href="../css/orarioMobile.css?version=9">
</head>
<body>
    <div class="div-title">
        <h1>Orario scolastico classe 5AINF</h1>
        <hr>
    </div>

    <div id="div-code" class="div-code">
        <p id="codeTxt">Clicca su una materia per visualizzare e copiare il codice</p>
        <p id="code" class="selectable">ass niggers</p>
    </div>

    <div class="div-table">
        <?php @createTable(); ?>
    </div>

    <div id="div-copy">
        <p id="copyTxt"></p>
    </div>

</body>

<!-- Questa parte di codice serve per far funzionare il live server -->
<?php 
    require_once "..\phpReloader\src\HotReloader.php";
    new HotReloader\HotReloader('//localhost/schoolHours/Orario/phpReloader/phrwatcher.php');
?>

<script src="../js/orario.js?version=8"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</html>

<?php
    function createTable() {
        $servername = "localhost";
        $username = "labottegadisasso";
        $password = "";
        $dbname = "my_labottegadisasso";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Check connection
        if (!$conn) {
            die('<p style="text-align: center;">Connessione col database non riuscita!</p>');
        }

        $cont = 0;

        $sql = "SELECT id, testo, class, code FROM orario";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row

            echo '<table class="table">
            <tr>
                <th id="gg0" class="gg">ORARIO</th>
                <th id="gg1" class="gg">Lunedi</th>
                <th id="gg2" class="gg">Martedi</th>
                <th id="gg3" class="gg">Mercoledi</th>
                <th id="gg4" class="gg">Giovedi</th>
                <th id="gg5" class="gg">Venerdi</th>
                <th id="gg6" class="gg">Sabato</th>
            </tr>';

            while($row = mysqli_fetch_assoc($result)) {
                if ($cont == 0 || $cont % 7 == 0) {
                    echo '<tr class="row">';
                }

                echo '<td id="' . $cont . '" class="' . $row['class'] . '" onClick="showCode(this.id)"><span id="span' 
                . $cont . '" class="none">' . $row['code'] . '</span>' . $row['testo'] . '</td>';
                $cont++;

                if ($cont % 7 == 0) {
                    echo '</tr>';
                }
            }

            echo '</tr></table>';
            
        } else {
            echo '<p style="text-align: center;">Connessione col database non riuscita!</p>';
        }

        mysqli_close($conn);
    }
?>