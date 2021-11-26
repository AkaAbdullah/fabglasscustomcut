import Link from 'next/link'
//Fetching completed tasks from api from button view completed tasks


const FirstBox = () => {
    return (
        <div className="container is-justify-content-center">
            <div className="columns is-centered ">
                <div className="column is-3">
                    <div class="card has-background-black-bis">
                        <div className="card-content">
                            <p className=" is-size-3 has-text-white"> <span className="is-size-1 has-text-white">C</span>ustom Cut</p>
                            <p className=" is-size-3 has-text-white"> <span className="is-size-1 has-text-white">P</span>rinting</p>
                            <p className=" is-size-3 mb-6 has-text-white"> <span className="is-size-1 has-text-white">R</span>eport</p>
                            <Link href="/customcutprintreport">
                                <a className="button is-outlined is-dark has-text-white is-fullwidth">View Status</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div class="card has-background-black-bis">
                        <div className="card-content">
                            <p className=" is-size-3 has-text-white"> <span className="is-size-1 has-text-white">R</span>eady Made</p>
                            <p className=" is-size-3 has-text-white"> <span className="is-size-1 has-text-white">P</span>rinting</p>
                            <p className=" is-size-3 mb-6 has-text-white"> <span className="is-size-1 has-text-white">R</span>eport</p>
                            <Link href="/readymadeprintreport">
                                <a className="button is-outlined is-dark has-text-white is-fullwidth">View Status</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // {/* <Link href="/readymadeprintreport">
        //     </Link>
        //     <Link href="/createtask">
        //         <a className="button is-fullwidth is-danger mb-4">Create a Task</a>
        //     </Link>
        //     <Link href="/markorderdeliver">
        //         <a className="button is-fullwidth is-link mb-4">Mark Order Deliverd Status</a>
        //     </Link>
        //     <Link href="/completedtasks">
        //         <a className="button is-fullwidth is-link">View Completed Tasks</a>
        //     </Link>
        // </div> */}

    )
}
export default FirstBox
