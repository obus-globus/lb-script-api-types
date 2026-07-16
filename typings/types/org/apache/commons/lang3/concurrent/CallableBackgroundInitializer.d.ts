import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
import type { BackgroundInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer$Builder.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class CallableBackgroundInitializer<T extends unknown> extends BackgroundInitializer<T> {
    static NUL: () => Object | null;
    static builder<T extends unknown>(): BackgroundInitializer$Builder<BackgroundInitializer<T>, T>;
    constructor(arg0: () => T)
    constructor(arg0: () => T, arg1: ExecutorService)
    // private callable: () => T;
    // private checkCallable(arg0: () => T): void;
    getTypedException(arg0: Exception): Exception;
    initialize(): T;
}