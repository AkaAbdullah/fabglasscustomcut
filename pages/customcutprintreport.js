import { useState } from 'react';
import Errorbox from '../components/Errorbox'
export const getServerSideProps = async () => {
    const res = await fetch('https://fabglass.vercel.app/api/customcutprintingreport');
    const { data } = await res.json();
    return {
        props: { reports: data }
    }
}


const Customcutprintreport = ({ reports }) => {

    const [searchOrder, setSearchOrder] = useState('');

    return (
        <div className="container">
            <div className="columns is-centered is-multiline">
                <div className="column">
                    <div className="box has-text-centered">
                        <p className="title">Custom Cut printer report</p>
                        <hr />
                        <div className="column is-half is-offset-one-quarter">
                            <div className="box has-background-danger-light mb-5 ">
                                <Errorbox />

                                <p className="subtitle">Search Order Number</p>
                                <input onChange={event => { setSearchOrder(event.target.value) }} className=" mb-5 input is-rounded" type="text" placeholder="Search...."></input>
                            </div>
                        </div>
                        {reports.filter((val) => {
                            const count = Object.keys(reports).length;
                            console.log(count);

                            if (searchOrder === '') {
                                return val
                            } else if (val.DocumentName.toLowerCase().includes(searchOrder.toLowerCase())) {
                                return val;
                            }
                        }).map(report => {
                            return (
                                <div className="columns is-centered" key={report._id}>
                                    <table className="table has-text-centered">
                                        <thead className="has-text-centered">
                                            <tr className="has-text-centered is-selected">
                                                <th className="has-text-black">ID</th>
                                                <th className="has-text-black">Order Number</th>
                                                <th className="has-text-black">Time</th>
                                                <th className="has-text-black">Status</th>
                                                <th className="has-text-black">Printer</th>
                                                <th className="has-text-black">Copies</th>
                                                <th className="has-text-black">Size</th>
                                                <th className="has-text-black">Height</th>
                                                <th className="has-text-black">Width</th>
                                                <th className="has-text-black">Duplex</th>
                                            </tr>
                                        </thead>
                                        <tbody className="has-text-centered">
                                            <tr>
                                                <td>{report._id}</td>
                                                <td>{report.DocumentName}</td>
                                                <td>{report.Time}</td>
                                                <td>Printed</td>
                                                <td>{report.Printer}</td>
                                                <td>{report.Copies}</td>
                                                <td>{report.Size}</td>
                                                <td>{report.Height}</td>
                                                <td>{report.Width}</td>
                                                <td>{report.Duplex}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}




export default Customcutprintreport
