import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Status from "../enums/status";
import IGame from "../model/game";

const initialState: IGame = {
    score: 0,
    status: Status.RUNNING
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        //  初始化游戏
        initGame: (state: IGame) => {
            state.score = initialState.score
            state.status = initialState.status
        },

        //  设置分数
        setScore: (state: IGame) => {
            state.score = state.score + 1
        },

        //  设置状态
        setStatus: (state: IGame, action: PayloadAction<Status>) => {
            state.status = action.payload
        }
    }
})

export const {initGame, setScore, setStatus} = gameSlice.actions
export default gameSlice.reducer
