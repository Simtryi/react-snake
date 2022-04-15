import { FC } from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import Counter from './components/Counter'

const App: FC = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default App
