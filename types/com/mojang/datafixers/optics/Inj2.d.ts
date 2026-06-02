import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Prism } from '../../../../com/mojang/datafixers/optics/Prism.d.ts'
import type { Cocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Inj2<F extends Object | number | string | boolean, G extends Object | number | string | boolean, G2 extends Object | number | string | boolean> extends Object implements Prism<Either<F, G>, Either<F, G2>, G, G2> {
    static INSTANCE: Inj2<Object, Object, Object>;
    static unbox(paramarg0: App2<Object, Object, Object>): Prism<Object, Object, Object, Object>;
    private constructor()
    build(arg0: G2): Either<F, G2>;
    eval(arg0: App<Cocartesian$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    match(arg0: Either<F, G>): Either<Either<F, G2>, G>;
    toString(): string;
}