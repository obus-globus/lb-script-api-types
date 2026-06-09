import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Function<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Function_2<K, V>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: K): V;
    clear(): void;
    compose(arg0: (param0: V) => T): (param0: V) => R;
    containsKey(arg0: Object): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
    size(): number;
}