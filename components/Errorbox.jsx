import { useState } from 'react';
export const getServerSideProps = async () => {
    const res = await fetch('https://fabglass.vercel.app/api/customcutprintingreport');
    const { data } = await res.json();
    return {
        props: { dublicate: data }


    }
}



const Errorbox = ({ dublicate }) => {
    return (
        <>
            <p>this is box</p>
        </>
    )
}

export default Errorbox
