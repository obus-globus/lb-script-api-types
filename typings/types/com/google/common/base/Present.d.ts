import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Optional as Optional_2 } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Present<T extends unknown> extends Optional<T> {
    static absent<T extends unknown>(): Optional<T>;
    static fromJavaUtil<T extends unknown>(paramjavaUtilOptional: Optional_2<T>): Optional<T>;
    static fromNullable<T extends unknown>(paramnullableReference: T): Optional<T>;
    static of<T extends unknown>(paramreference: T): Optional<T>;
    static presentInstances<T extends unknown>(paramoptionals: Optional<T>[]): T[];
    static toJavaUtil<T extends unknown>(paramgoogleOptional: Optional<T>): Optional_2<T>;
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
    transform<V extends unknown>(function_: (param0: T) => V): Optional<V>;
}