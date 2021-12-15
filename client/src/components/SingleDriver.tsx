import React from 'react'
import ReactLoading from 'react-loading';
import { useParams } from 'react-router'
import { IDriver } from '../types'
import { getDriver } from '../api';

export const SingleDriver = () => {
    const { id } = useParams();
    const [driver, setDriver] = React.useState<IDriver>();

    const getSingleDriver = async () => {
        const { data } = await getDriver(id!);
        setDriver(data);
    };

    React.useEffect(() => {
        getSingleDriver();
    }, []);


    return (
        <>
            {!driver ?
                (<>
                    Loading
                    <ReactLoading type={'bars'} color={'blue'} height={300} width={300} />
                </>) : (<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>{driver!.name} {driver!.surname}</h1>
                    <img src={driver!.image_url} alt="driver_img" height={600} width={400} />
                </div>)
            }
        </>

    )
}
