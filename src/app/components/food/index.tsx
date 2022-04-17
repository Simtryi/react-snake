import {FC} from "react";
import './index.less'
import {IPosition} from "../../reducers/snakeSlice";

interface IProps {
    position: IPosition
}

const Food: FC<IProps> = (props: IProps) => {
    let style = {
        left: `${props.position.x}%`,
        top: `${props.position.y}%`
    }
    return <div className="food" style={style} />
}

export default Food
