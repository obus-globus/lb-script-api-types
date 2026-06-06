import type { Object } from '../../../java/lang/Object.d.ts'
export class State extends Object {
    constructor()
    constructor(arg0: number)
    readonly depth: number;
    // private emits: string[];
    // private rootState: State;
    // private success: { [key: string]: State };
    addEmit(arg0: string): void;
    addEmit(arg0: E[]): void;
    addState(arg0: string): State;
    emit(): E[];
    failure(): State;
    getDepth(): number;
    getStates(): E[];
    getTransitions(): E[];
    nextState(arg0: string): State;
    // private nextState(arg0: string, arg1: boolean): State;
    nextStateIgnoreRootState(arg0: string): State;
    setFailure(arg0: State): void;
}