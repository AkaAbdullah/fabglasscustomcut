export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/tasks');
    const { data } = await res.json();
    return {
        props: { tasks: data }
    }
}




const completedtasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(task => {
                return (
                    <div key={task}>
                        <div className="container">
                            <div className="columns">
                                <div className="column is-half is-offset-one-quarter">
                                    <div className="card">
                                        <div className="card-header has-background-danger-light">
                                            <p className="card-header-title ">{task.title}</p>
                                            <p className="is-size-7 mt-4">ID: {task._id}</p>
                                        </div>
                                        <div className="card-content">
                                            <div className="content">
                                                {task.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

// completedtasks.getInitialProps = async () => {
//     const res = await fetch('http://localhost:3000/api/tasks')
//     const { data } = await res.json();
//     return { tasks: data }
// }

export default completedtasks
