import type { Object } from '../../../java/lang/Object.d.ts'
import type { Payload } from '../../../org/ahocorasick/trie/Payload.d.ts'
export class PayloadState<T extends unknown> extends Object {
    constructor()
    constructor(arg0: number)
    readonly depth: number;
    // private emits: Payload<T>[];
    // private rootState: PayloadState<T>;
    // private success: { [key: string]: PayloadState<T> };
    addEmit(arg0: Payload<T>[]): void;
    addEmit(arg0: Payload<T>): void;
    addState(arg0: string): PayloadState<T>;
    emit(): Payload<T>[];
    failure(): PayloadState<T>;
    getDepth(): number;
    getStates(): PayloadState<T>[];
    getTransitions(): string[];
    nextState(arg0: string): PayloadState<T>;
    // private nextState(arg0: string, arg1: boolean): PayloadState<T>;
    nextStateIgnoreRootState(arg0: string): PayloadState<T>;
    setFailure(arg0: PayloadState<T>): void;
}