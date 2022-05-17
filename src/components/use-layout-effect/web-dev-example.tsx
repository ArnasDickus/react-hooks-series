import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'

const WebDevExample = () => {
    const [show, setShow] = useState(false);
    const popup = useRef<HTMLInputElement>(null);
    const button = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        if(popup.current ===  null || button.current === null) {
            return;
        }
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    }, [show])
  return (
    <div>
        <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
        {show ? (
            <div style={{position: "absolute"}} ref={popup}>This is a popup</div>
        ) : null}
    </div>
  )
}

export default WebDevExample