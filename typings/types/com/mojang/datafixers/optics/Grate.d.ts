import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Grate$Mu } from '../../../../com/mojang/datafixers/optics/Grate$Mu.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { Closed$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Closed$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Grate<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends App2<Grate$Mu<A, B>, S, T>, Optic<Closed$Mu, S, T, A, B>, Object{
    eval<P extends K2>(arg0: App<Closed$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    grate(arg0: FunctionType<FunctionType<S, A>, B>): T;
    upCast<Proof2 extends K1>(arg0: TypeToken<K1>[], arg1: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}