import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Either$Mu } from '../../../../com/mojang/datafixers/util/Either$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Either$Left<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Either<L, R> {
    static left(paramarg0: Object | null): Either<Object, Object>;
    static right(paramarg0: Object | null): Either<Object, Object>;
    static unbox(paramarg0: App<Either$Mu<Object>, Object>): Either<Object, Object>;
    static unwrap(paramarg0: Either<Object, Object>): Object | null;
    constructor(arg0: L)
    // private value: L;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    ifLeft(arg0: (param0: L) => void): Either<L, R>;
    ifRight(arg0: (param0: R) => void): Either<L, R>;
    left(): Optional<L>;
    map<T extends Object | number | string | boolean>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
    mapBoth<C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: L) => C, arg1: (param0: R) => D): Either<C, D>;
    right(): Optional<R>;
    toString(): string;
}