import {createSlice} from "@reduxjs/toolkit";

/**
 * 游戏
 */
export interface IGame {
    score: number   //  分数
}

const initialState: IGame = {
    score: 0
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        //  初始化游戏
        initGame: (state: IGame) => {
            state.score = 0
        },

        //  设置分数
        setScore: (state: IGame) => {
            state.score = state.score + 1
        }
    }
})

export const {initGame, setScore} = gameSlice.actions
export default gameSlice.reducer
