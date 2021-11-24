import React from 'react'

const createtask = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="box">
                        <p className="subtitle has-text-centered">Create New Task</p>
                        <form>
                            <input className="input mb-5" type="text" placeholder="Task Name" />
                            <textarea className=" mb-5 textarea" placeholder="Task Description"></textarea>
                            <button className="button is-link is-fullwidth">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default createtask
