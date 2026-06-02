import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ThreadFactory extends Object{
    newThread(arg0: () => void): Thread;
}