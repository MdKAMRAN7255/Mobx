import { CounterStore } from "./CounterStore";

export interface IRootStore {
    countStore: CounterStore
}

export class RootStore implements IRootStore {
    countStore: CounterStore;
    
    constructor(){
        this.countStore = new CounterStore(this);
    }
}