import React, { useEffect } from 'react'

interface IChild {
    returnComment: any;
}
const Child = (props: IChild) => {

    useEffect(() => {
        console.log('Function Was acalled')
    }, [props?.returnComment])

  return (
    <div><p>{props?.returnComment('Arnas')}</p></div>
  )
}

export default Child