import { Reclamo } from "../../interfaces/Reclamo";
import React, { useState } from 'react';

interface Props {
    reclamos: any;
}

function ReclamoList(reclamos: Props) {
    // Modal functions
    const reclamosAbiertos = reclamos.reclamos.data.reclamosAbiertos;
    const [selectedData, setSelectedData] = useState<any | null>(null);

    const handleOpenModal = (reclamosAbiertos: any) => {
        setSelectedData(reclamosAbiertos);
    };

    const handleCloseModal = () => {
        setSelectedData(null);
    };
    // Botton change functions
    const [response, setResponse] = useState('');
    
    const handleClick = async (id: string) => {
        try {
            const res = await fetch(`/api/reclamos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                  }
                //body: JSON.stringify({ key: 'value' })
            });
            const data = await res.json();
            setResponse(data);
            location.reload();
        } catch (error) {
            console.error(error);
        }
    };
    //console.log(reclamos.reclamos.data.reclamosAbiertos);
    let contador = 1;
    return (

        <div className="w-full overflow-hidden rounded-lg shadow-xs py-3">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-100"
                        >
                            <th className="px-4 py-3">Nro</th>
                            <th className="px-4 py-3">Tipo</th>
                            <th className="px-4 py-3">Motivo</th>
                            <th className="px-4 py-3">Fecha</th>
                            <th className="px-4 py-3">Nro seguimiento</th>
                            <th className="px-4 py-3">Estado</th>
                            <th className="px-0 py-3">Acciones</th>

                        </tr>
                    </thead>
                    <tbody
                        className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-100"
                    >
                        {reclamos.reclamos.data.reclamosAbiertos.map((reclamo: any) => (

                            <tr className="text-gray-700 dark:text-gray-400" key={reclamo.id} >
                                <td className="px-4 py-3 text-sm">{contador++}</td>
                                <td className="px-4 py-3" >
                                    <div className="flex items-center text-sm" >

                                        <div>
                                            <p>{reclamo.tipo_reclamo}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    {reclamo.motivo_reclamo}
                                </td>
                                <td className="px-4 py-3 text-xs">
                                    {new Date(reclamo.fecha_reclamo).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    {reclamo.nro_seguimiento}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        Abierto
                                    </span>
                                </td>
                                <td className="px-0 py-3 text-sm">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleOpenModal(reclamo)}>Ver reclamo</button>
                                </td>


                            </tr>

                        ))}



                    </tbody>

                </table>
                {selectedData && (
                    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-10">
                        <div className="relative  max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-zinc-300 text-gray-900">

                            <button onClick={handleCloseModal} className="absolute top-2 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                </svg>
                            </button>
                            <h2 className="font-semibold">Sobre el reclamo</h2>
                            <div className="border-t border-black mb-2">
                                <p className="mb-0">ID: {selectedData.id}</p>
                                <p className="mb-0">Numero de seguimiento: {selectedData.nro_seguimiento}</p>
                                <p className="mb-0">Fecha de reclamo: {new Date(selectedData.fecha_reclamo).toLocaleDateString()}</p>
                                <p className="mb-0">Tipo de reclamo: {selectedData.tipo_reclamo}</p>
                                <p className="mb-0">Motivo de reclamo: {selectedData.motivo_reclamo}</p>
                                <p className="mb-0">Pedido de reclamo: {selectedData.pedido_reclamo}</p>
                                <p className="mb-0">Estado de reclamo: {selectedData.estado_reclamo}</p>
                            </div>

                            <h2 className="font-semibold">Sobre el Reclamante</h2>

                            <div className="border-t border-black mb-2">
                                <p className="mb-0">Nombres: {selectedData.nombres} {selectedData.apellidos}</p>
                                <p className="mb-0">Tipo de Documento: {selectedData.tipo_documento}</p>
                                <p className="mb-0">Nro de Documento: {selectedData.nro_dni}</p>
                            </div>

                            <h2 className="font-semibold">Datos de Contacto</h2>
                            <div className="border-t border-black mb-2">
                                <p className="mb-0">Email: {selectedData.email}</p>
                                <p className="mb-0">Telefono: {selectedData.telefono}</p>
                            </div>

                            <button type="button" className="px-8 my-4 py-2 font-semibold rounded-full bg-blue-500 hover:bg-blue-700 text-blue-50" onClick={() => handleClick(selectedData.id.toString())}>Revisado</button>
                        </div>
                    </div>
                )}
            </div>
            <div
                className="py-4 left-0 right-0 flex items-center justify-center"
            >
                <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm bg-gray-100 text-gray-800">
                    <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-gray-300">
                        <span className="sr-only">Previous</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border bg-blue-600 text-gray-50 border-gray-300">1</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">2</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">3</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">...</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">7</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">8</button>
                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300">9</button>
                    <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-300">
                        <span className="sr-only">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </div>


    )
}

export default ReclamoList;