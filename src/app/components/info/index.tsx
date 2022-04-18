import {FC} from "react";
import {useAppSelector} from "../../hooks/reduxHook";
import IGame from "../../model/game";
import "./index.less";

/**
 * 游戏信息
 */
const Info: FC = () => {
    const game: IGame = useAppSelector(state => state.game)

    return (
        <div className="info">
            <p>分数：</p>
            <span>{game.score}</span>
        </div>
    )
}

export default Info
