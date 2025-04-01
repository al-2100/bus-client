const URL_BASE = 'http://localhost:8080';
const ENCABEZADO_AUTORIZACION = 'Basic ' + btoa('user:4b176ea6-64c0-44cf-8b51-09612da9e2a2');

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
