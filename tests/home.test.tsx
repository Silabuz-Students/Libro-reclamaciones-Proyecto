import { render, screen, fireEvent, queryByTitle, queryByRole, getByRole } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import SubscriptionCard from '../src/pages/index'
import Document from "../src/pages/form/formulario"
import "@testing-library/jest-dom";


jest.mock('next/router', () => require('next-router-mock'));



describe('Boton de suscribirse', () => {
  it('El boton redirige correctamente a auth/register', () => {
    // Set the initial url:
    mockRouter.push("/");
    
    // Render the component:
    render(<SubscriptionCard/>);
    expect(screen.getByTestId("suscribe"))
    .toHaveTextContent('Suscribirme')

    // Click the button:
    fireEvent.click(screen.getByTestId("suscribe"));
    expect(mockRouter).toMatchObject({
        pathname:"/auth/register"
    })
    
  });

  it("el boton tiene el nombre Suscribirme",() =>{
    // Render the component:
    render(<SubscriptionCard/>);
    expect(screen.getByTestId("suscribe"))
    .toHaveTextContent('Suscribirme')
  })
});

describe("Formulario Reclamo",()=>{
    const titulo = "Datos de la persona que presenta el reclamo"
    mockRouter.push("/");
    const h3 = ""
    it("El formulario tiene el titulo Datos de la persona que presenta el reclamo ",() => {
        render(<Document/>);
        expect(screen.getByRole("heading",{
            name:titulo
        }))
    })
    
})

