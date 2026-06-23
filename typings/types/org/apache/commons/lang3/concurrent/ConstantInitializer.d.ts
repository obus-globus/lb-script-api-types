import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentInitializer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class ConstantInitializer<T extends unknown> extends Object implements ConcurrentInitializer<T> {
    static NUL: () => Object | null;
    constructor(arg0: T)
    readonly object: T;
    equals(arg0: Object | null): boolean;
    get(): T;
    getObject(): T;
    hashCode(): number;
    isInitialized(): boolean;
    toString(): string;
}