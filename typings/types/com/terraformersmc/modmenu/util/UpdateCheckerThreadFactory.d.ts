import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UpdateCheckerThreadFactory extends Object implements ThreadFactory {
    constructor()
    newThread(arg0: () => void): Thread;
}