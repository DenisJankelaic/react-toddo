import { Dispatcher } from "simplr-flux";
import { Click,
    ClearList,
    FilterDone,
    FilterUndone,
    RefreshList
} from "./button-actions";

export namespace ButtonActionsCreators {

    export function ClickPressed(index: number): void {
        Dispatcher.dispatch(new Click(index));
    }

    export function ClearListPressed(): void {
        Dispatcher.dispatch(new ClearList);
    }

    export function FilterDonePressed(): void {
        Dispatcher.dispatch(new FilterDone);
    }

    export function FilterUndonePressed(): void {
        Dispatcher.dispatch(new FilterUndone());
    }

    export function RefreshListPressed(): void {
        Dispatcher.dispatch(new RefreshList());
    }
}
