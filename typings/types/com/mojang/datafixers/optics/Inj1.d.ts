import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Prism } from '../../../../com/mojang/datafixers/optics/Prism.d.ts'
import type { Prism$Mu } from '../../../../com/mojang/datafixers/optics/Prism$Mu.d.ts'
import type { Cocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Inj1<F extends unknown, G extends unknown, F2 extends unknown> extends Object implements Prism<Either<F, G>, Either<F2, G>, F, F2> {
    static INSTANCE: Inj1<Object, Object, Object>;
    static unbox<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: App2<Prism$Mu<A, B>, S, T>): Prism<S, T, A, B>;
    private constructor()
    build(arg0: F2): Either<F2, G>;
    eval<P extends K2>(arg0: App<Cocartesian$Mu, P>): FunctionType<App2<P, F, F2>, App2<P, Either<F, G>, Either<F2, G>>>;
    match(arg0: Either<F, G>): Either<Either<F2, G>, F>;
    toString(): string;
}