import {suma} from "../src/services/suma"
import "@testing-library/jest-dom";


test("first test",()=>{
    const  result =   suma(4,4)
    expect( result).toBe(8)
})

