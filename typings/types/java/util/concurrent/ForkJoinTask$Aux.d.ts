import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ForkJoinTask$Aux extends Object {
    constructor(arg0: Thread, arg1: Throwable)
    // private ex: Throwable;
    // private next: ForkJoinTask$Aux;
    // private thread: Thread;
    casNext(arg0: ForkJoinTask$Aux, arg1: ForkJoinTask$Aux): boolean;
}