import Layout from '@/components/Layout';
import CerradoList from '../../components/reclamos/CerradoList';
import { Reclamo } from '../../interfaces/Reclamo';
interface Props {
    reclamosCerrados: Reclamo[]
}
export function Cerrados({ reclamosCerrados }: any) {
    return (<>
        <Layout>
            <CerradoList reclamosCerrados={reclamosCerrados}/>
        </Layout>
    </>)
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/reclamos/cerrados')
    const reclamos = await res.json()
    return {
        props: {
            reclamosCerrados: reclamos,
        },
    }
}

export default Cerrados;