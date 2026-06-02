import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { Predicate } from '../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Optional<T extends Object | number | string | boolean> extends Object {
    static empty(): Optional<Object>;
    static of(paramarg0: Object | null): Optional<Object>;
    static ofNullable(paramarg0: Object | null): Optional<Object>;
    private constructor(arg0: T)
    // private value: T;
    equals(arg0: Object | null): boolean;
    filter(arg0: (param0: T) => kotlin.Boolean): Optional<T>;
    flatMap(arg0: (param0: T) => Optional<U>): Optional<U>;
    get(): T;
    hashCode(): number;
    ifPresent(arg0: (param0: T) => void): void;
    ifPresentOrElse(arg0: (param0: T) => void, arg1: () => void): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    map(arg0: (param0: T) => U): Optional<U>;
    or(arg0: () => Optional<T>): Optional<T>;
    orElse(arg0: T): T;
    orElseGet(arg0: () => T): T;
    orElseThrow(): T;
    orElseThrow(arg0: () => X): T;
    stream(): Stream<T>;
    toString(): string;
}