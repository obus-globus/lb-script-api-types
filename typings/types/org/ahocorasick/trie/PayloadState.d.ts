import type { Object } from '../../../java/lang/Object.d.ts'
import type { Payload } from '../../../org/ahocorasick/trie/Payload.d.ts'
export class PayloadState<T extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(arg0: number)
    readonly depth: number;
    // private emits: Payload<T>[];
    readonly failure: PayloadState<T>;
    // private rootState: PayloadState<T>;
    // private success: { [key: string]: PayloadState<T> };
    addEmit(arg0: E[]): void;
    addEmit(arg0: Payload<T>): void;
    addState(arg0: string): PayloadState<T>;
    emit(): E[];
    failure(): PayloadState<T>;
    getDepth(): number;
    getStates(): E[];
    getTransitions(): E[];
    nextState(arg0: string): PayloadState<T>;
    // private nextState(arg0: string, arg1: boolean): PayloadState<T>;
    nextStateIgnoreRootState(arg0: string): PayloadState<T>;
    setFailure(arg0: PayloadState<T>): void;
}