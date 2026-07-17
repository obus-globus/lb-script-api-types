import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer.d.ts'
import type { AtomicInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/AtomicInitializer$Builder.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class AtomicInitializer<T extends unknown> extends AbstractConcurrentInitializer<T, ConcurrentException> {
    static NUL: () => Object | null;
    static builder<T extends unknown>(): AtomicInitializer$Builder<AtomicInitializer<T>, T>;
    constructor()
    // private reference: AtomicReference<T>;
    get(): T;
    // private getNoInit(): T;
    getTypedException(arg0: Exception): ConcurrentException;
    isInitialized(): boolean;
}