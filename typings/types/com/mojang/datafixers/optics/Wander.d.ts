import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Wander<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object{
    wander(arg0: Applicative<F, Object>, arg1: FunctionType<A, App<F, B>>): FunctionType<S, App<F, T>>;
}