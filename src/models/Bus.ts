export interface Marca {
    id: number;
    nombre: string;
}

export interface Bus {
    id: number;
    numeroBus: number;
    placa: string;
    fechaCreacion: string;
    caracteristicas: string;
    marca: Marca;
    activo: boolean;
}
