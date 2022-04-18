import {createSlice} from "@reduxjs/toolkit";
import IFood from "../model/food";

const initialState: IFood = {
    position: {
        x: 10,
        y: 10
    }
}

export const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        //  初始化食物
        initFood: (state: IFood) => {
            state.position = initialState.position
        },

        //  设置食物的位置
        setPosition: (state: IFood) => {
            //  食物出现范围是：[2, 96]
            let max = 95
            let min = 2

            //  随机设置食物的位置
            state.position.x = Math.floor((Math.random() * max + min) / 2) * 2
            state.position.y = Math.floor((Math.random() * max + min) / 2) * 2
        }
    }
})

export const {initFood, setPosition} = foodSlice.actions
export default foodSlice.reducer
