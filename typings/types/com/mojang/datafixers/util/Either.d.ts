import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Either$Mu } from '../../../../com/mojang/datafixers/util/Either$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Either<L extends unknown, R extends unknown> extends Object implements App<Either$Mu<R>, L> {
    static left<L extends unknown, R extends unknown>(paramarg0: L): Either<L, R>;
    static right<L extends unknown, R extends unknown>(paramarg0: R): Either<L, R>;
    static unbox<L extends unknown, R extends unknown>(paramarg0: App<Either$Mu<R>, L>): Either<L, R>;
    static unwrap<U extends unknown>(paramarg0: Either<U, U>): U;
    private constructor()
    flatMap<L2 extends unknown>(arg0: (param0: L) => Either<L2, R>): Either<L2, R>;
    ifLeft(arg0: (param0: L) => void): Either<L, R>;
    ifRight(arg0: (param0: R) => void): Either<L, R>;
    left(): Optional<L>;
    map<T extends unknown>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
    mapBoth<C extends unknown, D extends unknown>(arg0: (param0: L) => C, arg1: (param0: R) => D): Either<C, D>;
    mapLeft<T extends unknown>(arg0: (param0: L) => T): Either<T, R>;
    mapRight<T extends unknown>(arg0: (param0: R) => T): Either<L, T>;
    orThrow(): L;
    right(): Optional<R>;
    swap(): Either<R, L>;
}