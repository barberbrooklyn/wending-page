<?php
// Ruta del archivo JSON
$file = 'rsvp-data.json';

// Lee el contenido existente del archivo (si existe)
$data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

// Obtén los datos enviados desde el formulario
$input = json_decode(file_get_contents('php://input'), true);

if ($input) {
    // Agrega los nuevos datos al array existente
    $data[] = [
        'name' => $input['name'],
        'phone' => $input['phone'],
        'attending' => $input['attending'],
        'timestamp' => date('Y-m-d H:i:s'),
    ];

    // Guarda los datos actualizados en el archivo JSON
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    // Responde con éxito
    echo json_encode(['status' => 'success']);
} else {
    // Responde con error si no se enviaron datos
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'No data received']);
}
?>
