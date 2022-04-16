import React from 'react'
const snakeImg = require('../../resources/images/snack.png')
const robotImg = require('../../resources/images/robot.png')

interface IProps {}

interface IState {}

export default class Info extends React.Component<IProps, IState> {

    render() {
        return (
            <div className="right">
                <div className='record'>
                    <label>分数：</label>
                    <img src={snakeImg} />
                </div>

                <div className='level'>
                    <label>模式</label>
                </div>

                <div className='set'>

                </div>

                <div className='time'>
                    <img src={robotImg} />
                </div>
            </div>
        )
    }

}
