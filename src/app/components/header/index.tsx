import React from 'react'
import './index.less'

interface IProps {}

interface IState {}

export default class Header extends React.Component<IProps, IState> {

    render() {
        return (
            <div className="header">
                <div className="left">
                    <span />
                    <div className="cell" />
                    <div className="cell" />
                </div>

                <span>SNAKE</span>

                <div className="right">
                    <div className="top">
                        <div className="cell" />
                        <div className="cell" />
                        <div className="cell" />
                    </div>
                    <div className="bottom">
                        <div className="cell" />
                        <div className="cell" />
                    </div>
                </div>
            </div>
        )
    }

}
