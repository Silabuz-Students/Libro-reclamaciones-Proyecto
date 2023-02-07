import { Reclamo } from "../../interfaces/Reclamo";

interface Props {
    reclamosCerrados: any;
}

function CerradoList(reclamosCerrados: Props) {
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
                            <th className="px-4 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody
                        className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-100"
                    >
                        {reclamosCerrados.reclamosCerrados.data.reclamosCerrados.map((reclamo: any) => (
                            
                            <tr className="text-gray-700 dark:text-gray-400" key={reclamo.id} >
                                <td className="px-4 py-3 text-sm">{contador}</td>
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
                                        className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                        Cerrado
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
                                        Reabrir reclamo
                                    </button>
                                </td>


                            </tr>

                        ))}



                    </tbody>

                </table>
            </div>
            
            <div
                className="py-4 fixed  left-0 right-0 flex items-center justify-center"
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

export default CerradoList;