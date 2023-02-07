import Layout from '@/components/Layout';
import CerradoList from '../../components/reclamos/CerradoList';
import { Reclamo } from '../../interfaces/Reclamo';
import { GetServerSideProps } from 'next/types';
const urlbase = process.env.NEXTAUTH_URL;

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

export const getServerSideProps: GetServerSideProps = async ({req})  => {
    const res = await fetch(`${urlbase}/api/reclamos/cerrados`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: req.headers.cookie||''
        }
    });
    const reclamos = await res.json()
    return {
        props: {
            reclamosCerrados: reclamos,
        },
    }
}

export default Cerrados;