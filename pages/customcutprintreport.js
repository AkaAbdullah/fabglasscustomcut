export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/customcutprintingreport');
    const { data } = await res.json();
    return {
        props: { reports: data }
    }
}


const customcutprintreport = ({ reports }) => {
    return (
        <>
            <div className="columns is-centered">
                <div className="column">
                    <div className="box has-text-centered">
                        <p className="title">Custom Cut printer report</p>
                        <hr />
                        <p>Filters under process</p>
                        <input type="date"></input>
                        <input className="input is-rounded" type="text" placeholder="Search Order No"></input>

                        {reports.map(report => {
                            return (
                                <div key={report._id}>
                                    <table className="table has-text-centered">
                                        <thead className="has-text-centered">
                                            <tr className="has-text-centered">
                                                <th >ID</th>
                                                <th>Order</th>
                                                <th>Time</th>
                                                <th>Status</th>
                                                <th>Printer</th>
                                                <th>Copies</th>
                                                <th>Size</th>
                                                <th>Height</th>
                                                <th>Width</th>
                                                <th>Duplex</th>
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

        </>
    )
}


// customcutprintreport.getInitialProps = async () => {
//     const res = await fetch('http://localhost:3000/api/customcutprintingreport')
//     const { data } = await res.json();
//     return { reports: data }
// }




export default customcutprintreport
