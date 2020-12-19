<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orario 5AINF | AleSite</title>

    <link rel="stylesheet" href="../css/orario.css">
</head>
<body>
    <div class="div-title">
        <h1>Orario scolastico classe 5AINF</h1>
        <hr>
    </div>

    <div class="div-table">
        <?php @createTable(); ?>
    </div>

    <div id="div-code">
        <p id="codeTxt"></p>
    </div>

</body>

<?php 
    require_once "..\phpReloader\src\HotReloader.php";
    new HotReloader\HotReloader('//localhost/Orario/phpReloader/phrwatcher.php');
?>

<script src="../js/orario.js"></script>

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
                <th class="ora">ORARIO</th>
                <th class="ora">Lunedi</th>
                <th class="ora">Martedi</th>
                <th class="ora">Mercoledi</th>
                <th class="ora">Giovedi</th>
                <th class="ora">Venerdi</th>
                <th class="ora">Sabato</th>
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
            echo "<p>Errore!</p>";
        }

        mysqli_close($conn);
    }
?>