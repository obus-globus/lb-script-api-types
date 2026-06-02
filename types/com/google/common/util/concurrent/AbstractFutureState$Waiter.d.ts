import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFutureState$Waiter extends Object {
    constructor()
    constructor(unused: boolean)
    // private next: AbstractFutureState$Waiter;
    // private thread: Thread;
    setNext(next: AbstractFutureState$Waiter): void;
    unpark(): void;
}