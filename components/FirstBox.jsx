import Link from 'next/link'
import Image from 'next/image'
import mainimage from '../public/mainsvg2.png'
//Fetching completed tasks from api from button view completed tasks


const FirstBox = () => {
    return (
        <>
            <div className="container">
                <div className="columns is-vcentered is-multiline">
                    <div className="column is-one-quater">
                        <div className="box">
                            <Link href="/customcutprintreport">
                                <a className=" mb-4 button is-fullwidth is-link">Custom Cut Print Report</a>
                            </Link>
                            <Link href="/createtask">
                                <a className="button is-fullwidth is-danger mb-4">Create a Task</a>
                            </Link>
                            <Link href="/">
                                <a className="button is-fullwidth is-link mb-4">Mark Order Deliverd Status</a>
                            </Link>
                            <Link href="/completedtasks">
                                <a className="button is-fullwidth is-link">View Completed Tasks</a>
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <Image src={mainimage} alt="logo"></Image>
                    </div>
                </div>
            </div>
        </>


    )
}

export default FirstBox
