import React, { useEffect, useState } from 'react';
import { obtenerBuses, obtenerBusPorId } from '../services/busService';
import { Bus } from '../models/Bus';

const TablaBuses: React.FC = () => {
    // Usamos useState para almacenar la lista de buses obtenida desde el endpoint
    const [buses, establecerBuses] = useState<Bus[]>([]);
    const [pagina, establecerPagina] = useState<number>(0);
    const [totalPaginas, establecerTotalPaginas] = useState<number>(0);
    const tamano = 10;

    useEffect(() => {
        const cargarBuses = async () => {
            try {
                const datos = await obtenerBuses(pagina, tamano);
                if(datos.page){
                    establecerTotalPaginas(datos.page.totalPages);
                }
                const listaBuses = Array.isArray(datos) ? datos : datos.content ? datos.content : [];
                establecerBuses(listaBuses);
            } catch (error) {
                console.error(error);
            }
        };
        cargarBuses();
    }, [pagina]);

    const manejarClickFila = async (id: number) => {
        try {
            const detallesBus = await obtenerBusPorId(id);
            alert(JSON.stringify(detallesBus, null, 2));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="contenedor-tabla-buses">
            <h2>Listado de Buses</h2>
            <table className="tabla-buses">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Número</th>
                        <th>Placa</th>
                        <th>Características</th>
                        <th>Marca</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map(bus => (
                        <tr key={bus.id} onClick={() => manejarClickFila(bus.id)} style={{ cursor: 'pointer' }}>
                            <td>{bus.id}</td>
                            <td>{bus.numeroBus}</td>
                            <td>{bus.placa}</td>
                            <td>{bus.caracteristicas}</td>
                            <td>{bus.marca.nombre}</td>
                            <td>{bus.activo ? 'Activo' : 'Inactivo'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="paginacion">
                <button disabled={pagina === 0} onClick={() => establecerPagina(pagina - 1)}>Anterior</button>
                <span>Página {pagina}</span>
                <button disabled={pagina === totalPaginas - 1} onClick={() => establecerPagina(pagina + 1)}>Siguiente</button>
            </div>
        </div>
    );
};

export default TablaBuses;
