import { ReduceStore } from "simplr-flux";
import { Click,
    ClearList,
    FilterDone,
    FilterUndone,
    RefreshList
} from "./components/button-view/button-actions";

import { Task } from "./components/task-view/task-interface";

interface StoreState {
    inputValue: string;
    tasks: Task[];
    backuparray: Task[];
}

class TaskReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(Click, this.onClick.bind(this));
        this.registerAction(ClearList, this.onClearList.bind(this));
        this.registerAction(FilterDone, this.onFilterDone.bind(this));
        this.registerAction(FilterUndone, this.onFilterUndone.bind(this));
        this.registerAction(RefreshList, this.onRefreshList.bind(this));
    }

    private onClick(action: Click, state: StoreState): StoreState {
        const tasks = this..tasks;
        tasks[index].done = !tasks[index].done;
        this.setState({
            tasks
        });
    }

    private onClearList(action: ClearList, state: StoreState): StoreState {
        return {
        };
    }

    private onFilterDone(action: FilterDone, state: StoreState): StoreState {
        return {};
    }

    private onFilterUndone(action: FilterUndone, state: StoreState): StoreState {
        return {
        };
    }
    private onRefreshList(action: RefreshList, state: StoreState): StoreState {
        return {
        };
    }

    getInitialState(): StoreState {
        return {
            Count: 0
        };
    }

    public get Count(): number {
        return this.getState().Count;
    }
}

export const TaskReduceStore = new TaskReduceStoreClass();