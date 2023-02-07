import Layout from '@/components/Layout';
import ReclamoList from '../../components/reclamos/ReclamoList';
import { Reclamo } from '../../interfaces/Reclamo';

interface Props {
    reclamos: Reclamo[]
}
export function Dashboard({ reclamos }: Props) {
    return (<>
        <Layout>
            {
                reclamos.length === 0 ? (<h1> Hurra no hay reclamos pendientes</h1>)
                    :
                    (
                        <ReclamoList reclamos={reclamos} />
                    )}
        </Layout>
    </>)
}


export const getServerSideProps = async () => {    
    const res = await fetch(`http://localhost:3000/api/reclamos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'userId': '7'
        }
    });
    const reclamos = await res.json()
    return {
        props: {
            reclamos
        }
    }
}


export default Dashboard;