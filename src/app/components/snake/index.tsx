import {FC} from "react";
import ISnake from "../../model/snake";
import Position from "../../model/position";
import "./index.less";

interface IProps {
   snake: ISnake
}

/**
 * 蛇
 */
const Snake: FC<IProps> = (props: IProps) => {
    return (
        <div className="snake">
            {
                props.snake.positions.map((position: Position, index: number) => {
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
