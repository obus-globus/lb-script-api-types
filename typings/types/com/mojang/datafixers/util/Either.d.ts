import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Either$Mu } from '../../../../com/mojang/datafixers/util/Either$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Either<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements App<Either$Mu<R>, L> {
    static left(paramarg0: Object | null): Either<Object, Object>;
    static right(paramarg0: Object | null): Either<Object, Object>;
    static unbox(paramarg0: App<Either$Mu<Object>, Object>): Either<Object, Object>;
    static unwrap(paramarg0: Either<Object, Object>): Object | null;
    private constructor()
    flatMap<L2 extends Object | number | string | boolean>(arg0: (param0: L) => Either<L2, R>): Either<L2, R>;
    ifLeft(arg0: (param0: L) => void): Either<L, R>;
    ifRight(arg0: (param0: R) => void): Either<L, R>;
    left(): Optional<L>;
    map<T extends Object | number | string | boolean>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
    mapBoth<C extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: (param0: L) => C, arg1: (param0: R) => D): Either<C, D>;
    mapLeft<T extends Object | number | string | boolean>(arg0: (param0: L) => T): Either<T, R>;
    mapRight<T extends Object | number | string | boolean>(arg0: (param0: R) => T): Either<L, T>;
    orThrow(): L;
    right(): Optional<R>;
    swap(): Either<R, L>;
}