import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThreadExecutorMap extends Object {
    static apply(paramarg0: () => void, paramarg1: (Object | null)[]): () => void;
    static apply(paramarg0: Executor, paramarg1: (Object | null)[]): Executor;
    static apply(paramarg0: ThreadFactory, paramarg1: (Object | null)[]): ThreadFactory;
    static currentExecutor(): (Object | null)[];
    static setCurrentExecutor(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}