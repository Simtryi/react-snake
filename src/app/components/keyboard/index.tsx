import React from 'react'
import './index.less'

interface IProps {}

interface IState {}

export default class Keyboard extends React.Component<IProps, IState> {

    render() {
        return (
            <div className='keyboard'>
                <div className='left'>
                    <div className='top'>
                        <ul>
                            <li>
                                <button />
                            </li>
                            <li>
                                <button />
                            </li>
                            <li>
                                <button />
                            </li>
                            <li>
                                <button />
                            </li>
                        </ul>
                    </div>

                    <div className='bottom'>
                        <ul>
                            <li>
                                <button />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='right'>
                    <div className='direction'>
                        <div className='top'>
                            <button>
                            </button>
                        </div>

                        <div className='center'>
                            <button>
                            </button>

                            <div className='icon'>
                                <div className='top'>
                                </div>
                                <div className='center'>
                                </div>
                                <div className='bottom'>
                                </div>
                            </div>

                            <button>
                            </button>
                        </div>

                        <div className='bottom'>
                            <button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
