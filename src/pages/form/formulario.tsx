import React, { useState } from 'react';

export default function Document() {
    return (
        <section>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <form className="space-y-8 divide-y divide-gray-200">
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Datos de la persona que presenta el reclamo
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    En esta área deberá compartir sus datos.
                                </p>
                                </div>
                                <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Nombres
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="first_name" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Apellidos
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Fecha de Reclamo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name"  required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="oldenougth" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Mayor de edad
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        /> Sí
                                    
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="document" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Tipo de Documento
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select id="document" className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                        <option>DNI</option>
                                        <option>Pasaporte</option>
                                        <option>Carnet de Extranjería</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="docnumber" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Número de Documento
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="docnumber" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Nombre de Apoderado
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="first_name" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Dirección
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="address" required className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="reference" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Referencia
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="reference" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Departamento
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="department" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Provincia
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="province" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Distrito
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="district" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Email address
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input id="email" type="email" required className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="docnumber" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Teléfono de Contacto
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="docnumber" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Detalle de Reclamo
                                </h3>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="document" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Tipo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select id="document" className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                        <option>RECLAMO</option>
                                        <option>QUEJA</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Motivo de reclamo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="district" required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Pedido del reclamo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea id="about" name="about" required rows={3} className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder=""></textarea>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Fecha de Compra
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name"  required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="document" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Tipo de Comprobante
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select id="document" className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                        <option>Boleta</option>
                                        <option>Factura</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Número de Comprobante
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name"  required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Monto del producto
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name"  required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Código del producto
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="last_name"  required className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Detalle del producto
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    
                                    <textarea id="about" required name="about" rows={3} className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder=""></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='reclamo'></div>
                        <div className="pt-5">
                        <div className="flex justify-end">
                            <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancelar
                            </button>
                            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Enviar
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}
