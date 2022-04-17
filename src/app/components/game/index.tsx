import {FC, useEffect} from "react";
import Snake from "../snake";
import Food from "../food";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {
    initSnake,
    ISnake,
    setCurrentDirection,
    setNextDirection,
    setPositions
} from "../../reducers/snakeSlice";
import {IFood, initFood, setPosition} from "../../reducers/foodSlice";
import "./index.less"
import Direction from "../../enums/direction";
import {IGame, initGame, setScore} from "../../reducers/gameSlice";

const Game: FC = () => {
    const game: IGame = useAppSelector(state => state.game)
    const snake: ISnake  = useAppSelector(state => state.snake)
    const food: IFood = useAppSelector(state => state.food)

    const dispatch = useAppDispatch()

    useEffect(() => {
        //  监听键盘按下事件
        document.onkeydown = handleKeyDown
        //  每隔200ms前进一步
        let timer = setInterval(handleMove, 200);

        return () => {
            clearInterval(timer)
        }
    })

    useEffect(() => {
        checkGameOver()
    })

    useEffect(() => {
        checkEatFood()
    })

    //  处理键盘按下事件
    const handleKeyDown = (e: any) => {
        const keyCode = e.keyCode
        switch (keyCode) {
            case 38:
                //  下一个方向 UP，当前方向不能为 DOWN
                if (snake.currentDirection !== Direction.DOWN) {
                    dispatch(setNextDirection(Direction.UP))
                }
                break
            case 40:
                //  下一个方向 DOWN，当前方向不能为 UP
                if (snake.currentDirection !== Direction.UP) {
                    dispatch(setNextDirection(Direction.DOWN))
                }
                break
            case 37:
                //  下一个方向 LEFT，当前方向不能为 RIGHT
                if (snake.currentDirection !== Direction.RIGHT) {
                    dispatch(setNextDirection(Direction.LEFT))
                }
                break
            case 39:
                //  下一个方向 RIGHT，当前方向不能为 LEFT
                if (snake.currentDirection !== Direction.LEFT) {
                    dispatch(setNextDirection(Direction.RIGHT))
                }
                break
        }
    }

    //  处理移动
    const handleMove = () => {
        let positions = [...snake.positions]
        let header = positions[positions.length - 1]

        switch (snake.nextDirection) {
            case Direction.UP:
                header = {x: header.x, y: header.y - 2}
                break
            case Direction.DOWN:
                header = {x: header.x, y: header.y + 2}
                break
            case Direction.LEFT:
                header = {x: header.x - 2, y: header.y}
                break
            case Direction.RIGHT:
                header = {x: header.x + 2, y: header.y}
                break
        }

        positions.shift()
        positions.push(header)
        dispatch(setPositions(positions))
        dispatch(setCurrentDirection(snake.nextDirection))
    }

    //  判断是否 game over
    const checkGameOver = () => {
        let positions = [...snake.positions]
        let header = positions[positions.length - 1]
        let flag = false

        //  检查是否触碰边界
        if (header.x < 0 || header.x > 98 || header.y < 0 || header.y > 98) {
            flag = true
        }

        //  检查是否触碰自身
        for (let i = 1; i < positions.length - 1; i++) {
            if (header.x === positions[i].x && header.y === positions[i].y) {
                flag = true
                break
            }
        }

        if (flag) {
            dispatch(initGame())
            dispatch(initSnake())
            dispatch(initFood())
        }
    }

    //  判断是否吃到食物
    const checkEatFood = () => {
        let positions = [...snake.positions]
        let header = positions[positions.length - 1]

        if (header.x === food.position.x && header.y === food.position.y) {
            positions.unshift(food.position)
            dispatch(setPositions(positions))
            dispatch(setPosition())
            dispatch(setScore())
        }
    }

    return (
        <div  className="game" onKeyDown={handleKeyDown} tabIndex={0}>
            <Snake positions={snake.positions} />
            <Food position={food.position} />
            score: {game.score}
        </div>
    )
}

export default Game
