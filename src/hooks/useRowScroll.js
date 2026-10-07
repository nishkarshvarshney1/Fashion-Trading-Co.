import { useRef } from "react";

const useRowScroll = () => {
    const rowRef = useRef(null)
    const scrollLeft = () => {
        rowRef.current.scrollBy({ left: 230, behavior: 'smooth' })
    }
    const scrollRight = () => {
        rowRef.current.scrollBy({ left: -230, behavior: 'smooth' })
    }
    return {rowRef, scrollLeft, scrollRight}
}

export default useRowScroll



