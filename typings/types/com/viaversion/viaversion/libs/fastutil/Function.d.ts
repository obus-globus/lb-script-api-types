import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Function<K extends unknown, V extends unknown> extends Function_2<K, V>, Object {
    andThen(arg0: (param0: V) => V): (param0: K) => V;
    apply(arg0: K): V;
    clear(): void;
    compose(arg0: (param0: V) => K): (param0: V) => V;
    containsKey(arg0: Object): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
    size(): number;
}