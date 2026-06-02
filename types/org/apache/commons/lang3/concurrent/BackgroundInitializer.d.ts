import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer.d.ts'
import type { BackgroundInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer$Builder.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class BackgroundInitializer<T extends Object | number | string | boolean> extends AbstractConcurrentInitializer<T, Exception> {
    static NUL: () => Object | null;
    static builder(): BackgroundInitializer$Builder<Object, Object>;
    constructor()
    constructor(arg0: ExecutorService)
    private constructor(arg0: () => ConcurrentException, arg1: (param0: T) => void, arg2: ExecutorService)
    // private executor: ExecutorService;
    readonly externalExecutor: ExecutorService;
    readonly future: Future<T>;
    // private createExecutor(): ExecutorService;
    // private createTask(arg0: ExecutorService): () => T;
    get(): T;
    getActiveExecutor(): ExecutorService;
    getExternalExecutor(): ExecutorService;
    getFuture(): Future<T>;
    getTaskCount(): number;
    getTypedException(arg0: Exception): Exception;
    isInitialized(): boolean;
    isStarted(): boolean;
    setExternalExecutor(arg0: ExecutorService): void;
    start(): boolean;
}