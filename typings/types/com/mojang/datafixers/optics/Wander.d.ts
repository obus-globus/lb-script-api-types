import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Wander<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends Object{
    wander<F extends K1>(arg0: Applicative<F, any>, arg1: FunctionType<A, App<F, B>>): FunctionType<S, App<F, T>>;
}