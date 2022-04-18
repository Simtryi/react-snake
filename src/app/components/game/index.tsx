import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import ISnake from "../../model/snake";
import IFood from "../../model/food";
import Direction from "../../enums/direction";
import {initGame, setScore} from "../../reducers/gameSlice";
import {
    initSnake,
    setCurrentDirection,
    setPositions
} from "../../reducers/snakeSlice";
import {initFood, setPosition} from "../../reducers/foodSlice";

import Snake from "../snake";
import Food from "../food";

import "./index.less"

/**
 * 游戏界面
 */
const Game: FC = () => {
    const snake: ISnake  = useAppSelector(state => state.snake)
    const food: IFood = useAppSelector(state => state.food)

    const dispatch = useAppDispatch()

    useEffect(() => {
        //  每隔200ms前进一步
        let timer = setInterval(handleMove, 200);

        return () => {
            clearInterval(timer)
        }
    })

    useEffect(() => {
        checkGameOver()
        checkEatFood()
    })

    //  处理移动
    const handleMove = () => {
        //  蛇的位置
        let positions = [...snake.positions]
        //  蛇的头部
        let header = positions[positions.length - 1]

        switch (snake.nextDirection) {
            //  向上移动
            case Direction.UP:
                header = {x: header.x, y: header.y - 2}
                break
            //  向下移动
            case Direction.DOWN:
                header = {x: header.x, y: header.y + 2}
                break
            //  向左移动
            case Direction.LEFT:
                header = {x: header.x - 2, y: header.y}
                break
            //  向右移动
            case Direction.RIGHT:
                header = {x: header.x + 2, y: header.y}
                break
        }

        //  删除尾部，增加新的头部，实现移动的效果
        positions.shift()
        positions.push(header)
        dispatch(setPositions(positions))
        //  移动之后，设置蛇的移动方向为当前方向
        dispatch(setCurrentDirection(snake.nextDirection))
    }

    //  判断是否 Game Over
    const checkGameOver = () => {
        //  蛇的位置
        let positions = [...snake.positions]
        //  蛇的头部
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
            //  初始化游戏
            dispatch(initGame())
            //  初始化蛇
            dispatch(initSnake())
            //  初始化食物
            dispatch(initFood())
        }
    }

    //  判断是否吃到食物
    const checkEatFood = () => {
        //  蛇的位置
        let positions = [...snake.positions]
        //  蛇的头部
        let header = positions[positions.length - 1]

        if (header.x === food.position.x && header.y === food.position.y) {
            //  将食物的位置加入到蛇的位置中
            positions.unshift(food.position)
            dispatch(setPositions(positions))
            //  随机生成食物
            dispatch(setPosition())
            //  设置分数
            dispatch(setScore())
        }
    }

    return (
        <div className="game">
            <Snake snake={snake} />
            <Food food={food} />
        </div>
    )
}

export default Game
