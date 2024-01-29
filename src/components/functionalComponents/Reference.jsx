import React, { useEffect } from "react";
import { useRef, useState } from "react";

const Reference = () => {
    const [batchSize, updateBatchSize] = useState("")
    const prevBatch = useRef(batchSize);
    useEffect(() => {
        prevBatch.current = batchSize

    }, [batchSize])
    return (
        <div>
            <h1>
                Example for UseRef
            </h1>
            <input type="text" onChange={(event) => { updateBatchSize(event.target.value) }} />
            <h2>The text typed is" {batchSize} " and it's previous text is "{prevBatch.current}" </h2>
        </div>
    )
}
export default Reference;