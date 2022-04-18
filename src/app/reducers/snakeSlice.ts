import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Direction from "../enums/direction";
import Position from "../model/position";
import ISnake from "../model/snake";

const initialState: ISnake = {
    positions: [{
        x: 0,
        y: 0
    }, {
        x: 2,
        y: 0
    }],
    currentDirection: Direction.RIGHT,
    nextDirection: Direction.RIGHT
}

export const snakeSlice = createSlice({
    name: "snake",
    initialState,
    reducers: {
        //  初始化蛇
        initSnake: (state: ISnake) => {
            state.positions = initialState.positions
            state.currentDirection = initialState.currentDirection
            state.nextDirection = initialState.nextDirection
        },

        //  设置蛇的位置
        setPositions: (state: ISnake, action: PayloadAction<Position[]>) => {
            state.positions = action.payload
        },

        //  设置蛇的当前方向
        setCurrentDirection: (state: ISnake, action: PayloadAction<Direction>) => {
            state.currentDirection = action.payload
        },

        //  设置蛇的下一个方向
        setNextDirection: (state: ISnake, action: PayloadAction<Direction>) => {
            state.nextDirection = action.payload
        }
    }
})

export const {initSnake, setPositions, setCurrentDirection, setNextDirection} = snakeSlice.actions
export default snakeSlice.reducer
