import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ThreadUtils$ThreadPredicate extends Object{
    test(arg0: Thread): boolean;
}