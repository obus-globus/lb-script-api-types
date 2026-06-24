import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreCollectors$ToOptionalState<T extends unknown> extends Object {
    constructor(exceptionSupplier: () => RuntimeException)
    // private element: T;
    // private exceptionSupplier: () => RuntimeException;
    // private extras: T[];
    add(o: T): void;
    combine(other: MoreCollectors$ToOptionalState<T>): MoreCollectors$ToOptionalState<T>;
    getElement(): T;
    getOptional(): Optional<T>;
    multiples(overflow: boolean): RuntimeException;
}