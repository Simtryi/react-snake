import Position from "./position";
import Direction from "../enums/direction";

/**
 * 蛇
 */
interface ISnake {
    positions: Position[]       //  蛇的位置
    currentDirection: Direction //  蛇的当前方向
    nextDirection: Direction    //  蛇的下一个方向
}

export default ISnake
