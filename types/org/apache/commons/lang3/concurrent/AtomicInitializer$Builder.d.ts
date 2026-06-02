import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer$AbstractBuilder } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer$AbstractBuilder.d.ts'
import type { AtomicInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AtomicInitializer.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class AtomicInitializer$Builder<I extends AtomicInitializer<T>, T extends Object | number | string | boolean> extends AbstractConcurrentInitializer$AbstractBuilder<I, T, AtomicInitializer$Builder<I, T>, ConcurrentException> {
    static NUL: () => Object | null;
    constructor()
    get(): I;
}