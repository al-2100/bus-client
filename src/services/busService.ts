const URL_BASE = 'http://localhost:8080';
const ENCABEZADO_AUTORIZACION = 'Basic ' + btoa('user:f34a31a5-b3d5-42a6-a568-020c8ced9ef7'); // Reemplazar con tu token de autorización real.

// Función para obtener la lista de buses con paginación
export async function obtenerBuses(pagina: number, tamano: number) {
    const respuesta = await fetch(`${URL_BASE}/bus?pagina=${pagina}&tamano=${tamano}`, {
        method: 'GET',
        headers: {
            'Authorization': ENCABEZADO_AUTORIZACION,
            'Content-Type': 'application/json'
        }
    });
    if (!respuesta.ok) throw new Error('Error al obtener la lista de buses');
    return respuesta.json();
}

// Función para obtener los detalles de un bus por su ID
export async function obtenerBusPorId(id: number) {
    const respuesta = await fetch(`${URL_BASE}/bus/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': ENCABEZADO_AUTORIZACION,
            'Content-Type': 'application/json'
        }
    });
    if (!respuesta.ok) throw new Error('Error al obtener los detalles del bus');
    return respuesta.json();
}
