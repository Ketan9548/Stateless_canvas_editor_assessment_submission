import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const sceneId = uuidv4()
        navigate(`/canvas/${sceneId}`)
    }, [navigate])
    return null
}

export default Home
