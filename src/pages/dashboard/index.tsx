import Layout from '@/components/Layout';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';
import ReclamoList from '../../components/reclamos/ReclamoList';
import { Reclamo } from '../../interfaces/Reclamo';
const urlbase = process.env.NEXTAUTH_URL

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


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    //const session = await getSession({ req });
    
    const res = await fetch(`${urlbase}/api/reclamos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: req.headers.cookie || ''
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