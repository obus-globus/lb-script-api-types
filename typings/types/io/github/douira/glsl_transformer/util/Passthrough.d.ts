import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Passthrough<V extends unknown> extends Function<V, V>, Object {
    andThen(arg0: (param0: V) => V): (param0: V) => V;
    apply(arg0: V): V;
    compose(arg0: (param0: V) => V): (param0: V) => V;
}