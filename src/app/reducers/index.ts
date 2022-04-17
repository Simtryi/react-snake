import {combineReducers} from "@reduxjs/toolkit";
import game from "./gameSlice"
import snake from "./snakeSlice";
import food from "./foodSlice";

export default combineReducers({game, snake, food})
