import type { DefaultPromise } from '../../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { RunnableFuture } from '../../../../java/util/concurrent/RunnableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PromiseTask<V extends Object | number | string | boolean> extends DefaultPromise<V> implements RunnableFuture<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: (Object | null)[], arg1: () => void)
    constructor(arg0: (Object | null)[], arg1: () => void, arg2: V)
    constructor(arg0: (Object | null)[], arg1: () => V)
    // private task: Object;
    cancel(arg0: boolean): boolean;
    // private clearTaskAfterCompletion(arg0: boolean, arg1: () => void): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    run(): void;
    runTask(): V;
    setFailure(arg0: Throwable): Promise<V>;
    setFailureInternal(arg0: Throwable): Promise<V>;
    setSuccess(arg0: V): Promise<V>;
    setSuccessInternal(arg0: V): Promise<V>;
    setUncancellable(): boolean;
    setUncancellableInternal(): boolean;
    toStringBuilder(): StringBuilder;
    tryFailure(arg0: Throwable): boolean;
    tryFailureInternal(arg0: Throwable): boolean;
    trySuccess(arg0: V): boolean;
    trySuccessInternal(arg0: V): boolean;
}