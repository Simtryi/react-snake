import {FC, useEffect} from "react";
import Game from "./components/game";
import Keyboard from "./components/keyboard";
import Direction from "./enums/direction";
import {setNextDirection} from "./reducers/snakeSlice";
import ISnake from "./model/snake";
import {useAppDispatch, useAppSelector} from "./hooks/reduxHook";
import Info from "./components/info";

const App: FC = () => {
    const snake: ISnake  = useAppSelector(state => state.snake)

    const dispatch = useAppDispatch()

    useEffect(() => {
        //  监听键盘按下事件
        document.onkeydown = handleKeyDown
    })

    //  处理键盘按下事件
    const handleKeyDown = (e: any) => {
        const keyCode = e.keyCode
        handleKeyCode(keyCode)
    }

    const handleKeyCode = (keyCode: number) => {
        switch (keyCode) {
            case 38:
                //  下一个方向为 UP，当前方向不能为 DOWN
                if (snake.currentDirection !== Direction.DOWN) {
                    dispatch(setNextDirection(Direction.UP))
                }
                break
            case 40:
                //  下一个方向为 DOWN，当前方向不能为 UP
                if (snake.currentDirection !== Direction.UP) {
                    dispatch(setNextDirection(Direction.DOWN))
                }
                break
            case 37:
                //  下一个方向为 LEFT，当前方向不能为 RIGHT
                if (snake.currentDirection !== Direction.RIGHT) {
                    dispatch(setNextDirection(Direction.LEFT))
                }
                break
            case 39:
                //  下一个方向为 RIGHT，当前方向不能为 LEFT
                if (snake.currentDirection !== Direction.LEFT) {
                    dispatch(setNextDirection(Direction.RIGHT))
                }
                break
        }
    }

    return (
        <div className="app"  onKeyDown={handleKeyDown} tabIndex={0}>
            <Game />
            <Keyboard handleClick={handleKeyCode} />
            <Info />
        </div>
    )
}

export default App
