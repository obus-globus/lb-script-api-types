import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadDeathWatcher extends Object {
    static awaitInactivity(paramarg0: number, paramarg1: TimeUnit): boolean;
    static unwatch(paramarg0: Thread, paramarg1: () => void): void;
    static watch(paramarg0: Thread, paramarg1: () => void): void;
    private constructor()
}