import { useRouter } from "next/router"
import { useState } from "react"


type form = {
  nombre?: string,
  email?: string
  ruc?: string
  telefono?: string
  domicilio_fiscal?: string
  password?: string
}

export default function Register() {
  const [errors, setErrors] = useState<string>("")
  const router = useRouter()
  const [values, setValues] = useState<form>({
    nombre: "",
    email: "",
    ruc: "",
    telefono: "",
    domicilio_fiscal: "",
    password: ""

  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    //permite que los valores puedan cambiar y se puede obtener con values.{nombredelvalor}
    //example values.email
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      nombre: values.nombre,
      email: values.email,
      ruc: values.ruc,
      telefono: values.telefono,
      domicilio_fiscal: values.domicilio_fiscal,
      password: values.password
    }
    console.log(data)
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    // API endpoint where we send form data.
    const endpoint = '/api/users/register'
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    if (response.status == 201) {
      alert(`${result.message} ${data.email}`)
      router.push("/auth/signin")
    } else if (response.status == 400) {
      setErrors(result.message)
    }
    else {
      setErrors("ERROR DEL SERVIDOR")
    }

  }



  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Register</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Registro de cuenta</h3>
          <form action="#" className="flex flex-col space-y-5" onSubmit={handleSubmit}  >
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="telefono" className="text-sm font-semibold text-gray-500">Telefono</label>
              <input
                type="String"
                id="telefono"
                name="telefono"
                value={values.telefono}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="ruc" className="text-sm font-semibold text-gray-500">Ruc</label>
              <input
                type="text"
                id="ruc"
                name="ruc"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="nombre" className="text-sm font-semibold text-gray-500">Razon Social</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="domicilio_fiscal" className="text-sm font-semibold text-gray-500">Domicilio Fiscal</label>
              <input
                type="text"
                id="domicilio_fiscal"
                name="domicilio_fiscal"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Contraseña</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Registrate
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span
                className="flex items-center justify-center space-x-2 emoji"
                role="img">
                <p className="text-sm font-semibold text-red-500">
                  <span>{errors}</span>
                </p>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )



}