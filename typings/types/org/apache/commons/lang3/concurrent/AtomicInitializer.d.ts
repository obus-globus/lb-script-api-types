import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer.d.ts'
import type { AtomicInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/AtomicInitializer$Builder.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class AtomicInitializer<T extends Object | number | string | boolean> extends AbstractConcurrentInitializer<T, ConcurrentException> {
    static NUL: () => Object | null;
    static builder(): AtomicInitializer$Builder<Object, Object>;
    constructor()
    private constructor(arg0: () => ConcurrentException, arg1: (param0: T) => void)
    // private reference: AtomicReference<T>;
    get(): T;
    // private getNoInit(): T;
    getTypedException(arg0: Exception): ConcurrentException;
    isInitialized(): boolean;
}