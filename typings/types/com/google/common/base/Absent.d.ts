import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Optional as Optional_2 } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Absent<T extends unknown> extends Optional<T> {
    static absent(): Optional<Object>;
    static fromJavaUtil(paramjavaUtilOptional: Optional_2<Object>): Optional<Object>;
    static fromNullable(paramnullableReference: Object | null): Optional<Object>;
    static of(paramreference: Object | null): Optional<Object>;
    static presentInstances(paramoptionals: Optional<Object>[]): (Object | null)[];
    static toJavaUtil(paramgoogleOptional: Optional<Object>): Optional_2<Object>;
    private constructor()
    asSet(): T[];
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    isPresent(): boolean;
    or(defaultValue: T): T;
    or(secondChoice: Optional<T>): Optional<T>;
    or(supplier: () => T): T;
    orNull(): T;
    // private readResolve(): Object;
    toString(): string;
    transform<V extends unknown>(function_: (param0: Object) => boolean): Optional<V>;
}