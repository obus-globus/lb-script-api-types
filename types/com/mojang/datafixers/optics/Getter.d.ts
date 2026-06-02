import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Getter$Mu } from '../../../../com/mojang/datafixers/optics/Getter$Mu.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { GetterP$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/GetterP$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Getter<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<Getter$Mu<A, B>, S, T>, Optic<GetterP$Mu, S, T, A, B>, Object{
    eval(arg0: App<GetterP$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    get(arg0: S): A;
    upCast(arg0: TypeToken<K1>[], arg1: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}