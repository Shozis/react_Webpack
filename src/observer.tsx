import counterStore from "./store/stores/CouterStore";

import { observer } from "mobx-react";

const Mobx = observer(() => {
    return <div>
        <h1>{counterStore.count}</h1>
        <button onClick={counterStore.increment}>+</button>
        <button onClick={counterStore.decrement}>-</button>
    </div>
});

export default Mobx;