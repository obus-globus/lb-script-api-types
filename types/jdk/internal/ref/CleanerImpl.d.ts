import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Cleaner } from '../../../java/lang/ref/Cleaner.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { CleanerImpl$CleanableList } from '../../../jdk/internal/ref/CleanerImpl$CleanableList.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CleanerImpl extends Object implements Runnable {
    static setCleanerImplAccess(paramarg0: (param0: Cleaner) => CleanerImpl): void;
    constructor()
    // private activeList: CleanerImpl$CleanableList;
    // private queue: ReferenceQueue<Object>;
    run(): void;
    start(arg0: Cleaner, arg1: ThreadFactory): void;
}