import {FC} from "react";
import "./index.less";

interface IProps {
    handleClick: any
}

/**
 * 键盘
 */
const Keyboard: FC<IProps> = (props: IProps) => {
    //  处理点击事件
    const handleClick = (keyCode: number) => {
        props.handleClick(keyCode)
    }

    return (
        <div className='keyboard'>
            <div className='up'>
                <button onClick={() => {handleClick(38)}}>上</button>
            </div>

            <div className='left'>
                <button onClick={() => {handleClick(37)}}>左</button>
            </div>

            <div className='right'>
                <button onClick={() => {handleClick(39)}}>右</button>
            </div>

            <div className='down'>
                <button onClick={() => {handleClick(40)}}>下</button>
            </div>
        </div>
    )
}

export default Keyboard
