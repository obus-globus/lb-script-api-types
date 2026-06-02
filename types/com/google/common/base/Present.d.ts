import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Present<T extends Object | number | string | boolean> extends Optional<T> {
    static absent(): Optional<Object>;
    static fromJavaUtil(paramjavaUtilOptional: Optional<Object>): Optional<Object>;
    static fromNullable(paramnullableReference: Object | null): Optional<Object>;
    static of(paramreference: Object | null): Optional<Object>;
    static presentInstances(paramoptionals: (Object | null)[]): (Object | null)[];
    static toJavaUtil(paramgoogleOptional: Optional<Object>): Optional<Object>;
    constructor(reference: T)
    // private reference: T;
    asSet(): T[];
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    isPresent(): boolean;
    or(defaultValue: T): T;
    or(secondChoice: Optional<T>): Optional<T>;
    or(supplier: () => T): T;
    orNull(): T;
    toString(): string;
    transform(function_: (param0: T) => V): Optional<V>;
}