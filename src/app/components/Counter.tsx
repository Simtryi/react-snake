import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { increment, decrement, incrementByAmount } from "../reducers/counterSlice";

const Counter: FC = () => {
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useAppDispatch()

    return (
        <div>
            <span>{count}</span>

            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>

            <button onClick={() => dispatch(incrementByAmount(2))}>
                IncrementByAmount
            </button>
        </div>
    )
}

export default Counter
