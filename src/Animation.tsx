import React, { FC } from 'react'
import Sprite from './Sprite';

//====================================================//

export type Position = {
    x: number,
    y: number,
}


type Props = {
    rabbit: Position,
}

//====================================================//

const Animation: FC <Props> = ({rabbit}) => {
    return (
        <div style={{ border: "1px solid #73AD21", width: "100%", height: "300px", position: "relative", }}>
            <Sprite x={rabbit.x} y={rabbit.y} height="100px" width="100px">
                <img style={{ width: '100%', height: '100%' }} src="spring_bunny_2.svg" alt="My Happy SVG" />
            </Sprite>
            <Sprite x={0} y={0} height="100px" width="100%">
                <img style={{ width: '100%', height: '100%' }} src="wave_many.svg" alt="My Happy SVG" />
            </Sprite>
        </div>
    )
}

//====================================================//

export default Animation