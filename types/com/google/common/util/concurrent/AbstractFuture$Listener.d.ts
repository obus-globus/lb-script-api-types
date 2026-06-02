import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFuture$Listener extends Object {
    constructor()
    constructor(task: () => void, executor: Executor)
    // private executor: Executor;
    // private next: AbstractFuture$Listener;
    // private task: () => void;
}