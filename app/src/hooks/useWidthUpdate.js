import { useLayoutEffect, useState } from 'react'

export const useWidthUpdate = () => {
    const [, setWidth] = useState(0)

    useLayoutEffect(() => {
        const updateSize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateSize)
        updateSize()

        return () => window.removeEventListener('resize', updateSize)
    }, [])
}
