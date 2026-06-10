import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Optional as Optional_2 } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Optional<T extends Object | number | string | boolean> extends Object implements Serializable {
    static absent(): Optional<Object>;
    static fromJavaUtil(paramjavaUtilOptional: Optional_2<Object>): Optional<Object>;
    static fromNullable(paramnullableReference: Object | null): Optional<Object>;
    static of(paramreference: Object | null): Optional<Object>;
    static presentInstances(paramoptionals: Optional<Object>[]): (Object | null)[];
    static toJavaUtil(paramgoogleOptional: Optional<Object>): Optional_2<Object>;
    constructor()
    asSet(): T[];
    equals(object: Object | null): boolean;
    get(): T;
    hashCode(): number;
    isPresent(): boolean;
    or(defaultValue: T): T;
    or(secondChoice: Optional<T>): Optional<T>;
    or(supplier: () => T): T;
    orNull(): T;
    toJavaUtil(): Optional_2<T>;
    toString(): string;
    transform<V extends Object | number | string | boolean>(function_: (param0: Object) => boolean): Optional<V>;
}