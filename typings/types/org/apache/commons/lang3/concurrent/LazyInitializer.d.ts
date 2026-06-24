import type { LazyInitializer$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { LazyInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/LazyInitializer$Builder.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LazyInitializer<T extends unknown> extends AbstractConcurrentInitializer<T, ConcurrentException> {
    static NUL: () => Object | null;
    static builder(): LazyInitializer$Builder<LazyInitializer<Object>, Object>;
    constructor()
    constructor(arg0: () => Object, arg1: (param0: Object) => void, arg2: LazyInitializer$1)
    private constructor(arg0: () => T, arg1: (param0: T) => void)
    // private object: T;
    get(): T;
    getTypedException(arg0: Exception): ConcurrentException;
    isInitialized(): boolean;
}