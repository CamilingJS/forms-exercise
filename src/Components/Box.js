import React from 'react'

export default function Box(props) {
    return (
        <div>
            <div
                style={{
                    height: `${props.height}em`,
                    width: `${props.width}em`,
                    backgroundColor: props.color
                }}
            >    
            </div>
            <button>X</button>
        </div>
    )
}
