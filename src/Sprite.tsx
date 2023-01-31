import React, { FC, PropsWithChildren} from 'react'

//====================================================//

type Props = {
    x: number,
    y: number,
    height: string,
    width: string,
    z: string,
}

//====================================================//

const Sprite: FC<PropsWithChildren<Props>> = ({ children, height, width, x, y,z}) => {
    return (
        <div style={{ border: "1px solid #73AD21", width: width, height: height, position: "absolute", bottom: `${y}px`, left: `${x}px`, zIndex: z }} >
          {children}
        </div>
        
    )
}

//====================================================//

export default Sprite