import { useEffect, useState } from 'react'

const useImage = (fileName,type='png') => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)
console.log(image) 
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/img/${type}/${fileName}.${type}`) 
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage