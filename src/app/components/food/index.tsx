import {FC} from "react";
import IFood from "../../model/food";
import './index.less'

interface IProps {
    food: IFood
}

/**
 * 食物
 */
const Food: FC<IProps> = (props: IProps) => {
    let style = {
        left: `${props.food.position.x}%`,
        top: `${props.food.position.y}%`
    }
    return <div className="food" style={style} />
}

export default Food
