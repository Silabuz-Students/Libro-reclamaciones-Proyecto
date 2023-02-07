export interface Reclamo {
    id?: number;
    nro_seguimiento: string;
    nombres: string;
    apellidos: string;
    fecha_reclamo: string;
    mayor_edad: boolean;
    tipo_documento: string
    nro_dni: string;
    nombre_apoderado?:string;
    direccion?:string;
    referencia?:string;
    departamento?:string;
    provincia?: string;
    distrito?: string;
    email: string;
    telefono: string;
    tipo_reclamo: string
    motivo_reclamo: string;
    pedido_reclamo: string;
    estado_reclamo: string
    detalle_reclamo?: any[];
}


// enum Tipo_Doc { dni = 'DNI', ce = 'CE', passport = 'PASSPORT'};
// enum Tipo_Reclamo { queja = 'QUEJA', reclamo = 'RECLAMO'};
// enum Estado_Reclamo { abierto = 'ABIERTO', cerrado = 'CERRADO'};

