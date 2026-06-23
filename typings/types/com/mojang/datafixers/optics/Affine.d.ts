import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Affine$Mu } from '../../../../com/mojang/datafixers/optics/Affine$Mu.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { AffineP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/AffineP$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Affine<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends App2<Affine$Mu<A, B>, S, T>, Optic<AffineP$Mu, S, T, A, B>, Object{
    eval<P extends K2>(arg0: App<AffineP$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    preview(arg0: S): Either<T, A>;
    set(arg0: B, arg1: S): T;
    upCast<Proof2 extends K1>(arg0: TypeToken<K1>[], arg1: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}