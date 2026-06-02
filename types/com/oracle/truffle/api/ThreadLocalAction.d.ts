import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ThreadLocalAction extends Object {
    constructor(hasSideEffects: boolean, synchronous: boolean)
    constructor(hasSideEffects: boolean, synchronous: boolean, recurring: boolean)
    // private hasSideEffects: boolean;
    // private recurring: boolean;
    // private synchronous: boolean;
    hasSideEffects(): boolean;
    isRecurring(): boolean;
    isSynchronous(): boolean;
    notifyBlocked(access: ThreadLocalAction$Access): void;
    notifyUnblocked(access: ThreadLocalAction$Access): void;
    perform(access: ThreadLocalAction$Access): void;
}