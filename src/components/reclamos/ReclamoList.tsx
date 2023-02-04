import { Reclamo } from "../../interfaces/Reclamo";

interface Props {
    reclamos: any;
}

function ReclamoList(reclamos: Props) {
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
                                <td className="px-4 py-3 text-sm">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Ver reclamo
                                    </button>
                                </td>


                            </tr>

                        ))}



                    </tbody>

                </table>
            </div>
            <div
                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-100"
            >
                <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                </span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Previous"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    1
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    2
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    3
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    4
                                </button>
                            </li>
                            <li>
                                <span className="px-3 py-1">...</span>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    8
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                >
                                    9
                                </button>
                            </li>
                            <li>
                                <button
                                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Next"
                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        aria-hidden="true"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </span>
            </div>
        </div>


    )
}

export default ReclamoList;