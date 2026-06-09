import type { FunctionType$Mu } from '../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { FunctionType$ReaderMu } from '../../../com/mojang/datafixers/FunctionType$ReaderMu.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FunctionType<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App<FunctionType$ReaderMu<A>, B>, App2<FunctionType$Mu, A, B>, Function<A, B>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: A): B;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}