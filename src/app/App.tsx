import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import './App.less'

import Header from './components/header'
import Keyboard from "./components/keyboard";

interface IProps {}

interface IState {}

export default class App extends React.Component<IProps, IState> {

    //  处理键盘事件
    handleKeyDown = (event: any) => {
        const keyCode = event.nativeEvent.keyCode;
        console.log("key code: ", keyCode)
    }

    render() {
        return (
            <Provider store={store}>
                <div className="app" onKeyDown={this.handleKeyDown} tabIndex={0}>
                    <div className="layout">
                        <div className="layout-top">
                            <div className="header">
                                <Header />
                            </div>
                            <div className="content">
                                <div className="main">
                                    <div className="screen">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="layout-bottom">
                            <Keyboard />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }

}
