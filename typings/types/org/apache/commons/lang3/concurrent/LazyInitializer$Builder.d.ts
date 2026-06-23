import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer$AbstractBuilder } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer$AbstractBuilder.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { LazyInitializer } from '../../../../../org/apache/commons/lang3/concurrent/LazyInitializer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class LazyInitializer$Builder<I extends LazyInitializer<T>, T extends unknown> extends AbstractConcurrentInitializer$AbstractBuilder<I, T, LazyInitializer$Builder<I, T>, ConcurrentException> {
    static NUL: () => Object | null;
    constructor()
    get(): I;
}