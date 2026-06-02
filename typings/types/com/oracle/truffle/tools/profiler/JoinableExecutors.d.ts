import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JoinableExecutors extends Object {
    static newSingleThreadScheduledExecutor(paramthreadFactory: ThreadFactory): ScheduledExecutorService;
    private constructor()
}