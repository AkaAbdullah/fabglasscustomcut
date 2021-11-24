import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const createtask = () => {

    const initialValues = { title: "", description: "", date: "" }
    const [formvalues, setFormvalues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();

    const handleChange = (e) => {
        console.log(date);
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmitting(true);
        createTask();
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            console.log(formvalues)
        }
    }, [formErrors])


    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Title is required";
        }
        if (!values.description) {
            errors.description = "Description is required";
        }
        return errors;
    }

    const createTask = async () => {
        try {
            const data = { formvalues, current_date }
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formvalues)
            })
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="box">
                        <p className="subtitle has-text-centered">Create a New Task</p>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <label className="label">Title</label>
                            <p className="has-text-danger">{formErrors.title}</p>
                            <input
                                class="input mb-5"
                                name="title"
                                type="text"
                                placeholder="Enter Title"
                                value={formvalues.title}
                                onChange={handleChange}>
                            </input>
                            <label className="label">Description</label>
                            <p className="has-text-danger">{formErrors.description}</p>
                            <textarea
                                class="textarea mb-5"
                                name="description"
                                placeholder="Enter Description"
                                value={formvalues.description}
                                onChange={handleChange}>
                            </textarea>

                            <button className="button mb-5 is-fullwidth is-success">Save</button>
                        </form>
                        <Link href="/completedtasks">
                            <a className="button is-fullwidth is-link">View Completed Tasks</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default createtask
