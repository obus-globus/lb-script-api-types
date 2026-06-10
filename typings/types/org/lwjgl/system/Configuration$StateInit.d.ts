import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Configuration$StateInit<T extends Object | number | string | boolean> extends Function<string, T>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: T) => V): (param0: string) => V;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => string): (param0: V) => T;
}