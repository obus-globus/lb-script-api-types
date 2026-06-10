import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentInitializer.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export abstract class AbstractConcurrentInitializer<T extends Object | number | string | boolean, E extends Exception> extends Object implements ConcurrentInitializer<T> {
    static NUL: () => Object | null;
    constructor()
    constructor(arg0: () => T, arg1: (param0: T) => void)
    // private closer: (param0: T) => void;
    // private initializer: () => T;
    close(): void;
    getTypedException(arg0: Exception): E;
    initialize(): T;
    isInitialized(): boolean;
}