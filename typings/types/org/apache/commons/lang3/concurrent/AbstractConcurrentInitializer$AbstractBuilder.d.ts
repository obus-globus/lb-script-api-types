import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractSupplier } from '../../../../../org/apache/commons/lang3/builder/AbstractSupplier.d.ts'
import type { AbstractConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export abstract class AbstractConcurrentInitializer$AbstractBuilder<I extends AbstractConcurrentInitializer<T, E>, T extends unknown, B extends AbstractConcurrentInitializer$AbstractBuilder<I, T, B, E>, E extends Exception> extends AbstractSupplier<I, B, E> {
    static NUL: () => Object | null;
    constructor()
    readonly closer: (param0: T) => void;
    readonly initializer: () => T;
    getCloser(): (param0: T) => void;
    getInitializer(): () => T;
    setCloser(arg0: (param0: T) => void): B;
    setInitializer(arg0: () => T): B;
}