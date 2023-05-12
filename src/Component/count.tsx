import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

export const Count = observer(()=>{
    const {rootStore} = useStore();

    const onIncrement = () =>{
        rootStore.countStore.increment(); 
    }
    const onDecrement = () =>{
        rootStore.countStore.decrement(); 
    }
    return(
        <>
            Count: {rootStore.countStore.getCountValue}
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </>
    )
})