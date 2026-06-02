import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadUtils$ThreadPredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$ThreadPredicate.d.ts'
export class ThreadUtils$ThreadIdPredicate extends Object implements ThreadUtils$ThreadPredicate {
    constructor(arg0: number)
    // private threadId: number;
    test(arg0: Thread): boolean;
}