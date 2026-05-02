import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isSubmitting) {
            return
        }

        const form = e.target
        const formData = new FormData(form)

        try {
            setIsSubmitting(true)

            const res = await axios.post('http://localhost:3000/create-post', formData)
            form.reset()
            navigate('/feed', {
                state: {
                    refreshAt: Date.now(),
                    createdPost: res.data?.post || null,
                },
            })
        } catch (error) {
            console.log(error)
            alert(error.response?.data?.message || 'Unable to create post')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="create-post-section">
            <h1>Create post</h1>

            <form onSubmit={handleSubmit} >
                <input type="file" name="image" accept="image/*" required />
                <input type="text" name="caption" required />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Posting...' : 'Submit'}
                </button>
            </form>
        </section>
    )
}

export default CreatePost
