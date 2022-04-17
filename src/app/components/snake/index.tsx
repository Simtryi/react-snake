import {FC} from "react";
import {IPosition} from "../../reducers/snakeSlice";
import "./index.less";

interface IProps {
   positions: IPosition[]
}

const Snake: FC<IProps> = (props: IProps) => {
    return (
        <div>
            {
                props.positions.map((position: IPosition, index: number) => {
                    let style = {
                        left: `${position.x}%`,
                        top: `${position.y}%`
                    }
                    return <div className="cell" style={style} key={index} />
                })
            }
        </div>
    )
}

export default Snake
