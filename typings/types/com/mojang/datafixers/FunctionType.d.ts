import type { FunctionType$Mu } from '../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { FunctionType$ReaderMu } from '../../../com/mojang/datafixers/FunctionType$ReaderMu.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FunctionType<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App<FunctionType$ReaderMu<A>, B>, App2<FunctionType$Mu, A, B>, Function<A, B>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: B) => V): (param0: A) => V;
    apply(arg0: A): B;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => A): (param0: V) => B;
}