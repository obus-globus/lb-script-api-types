import type { Object } from '../../../java/lang/Object.d.ts'
export interface Function<T extends unknown, R extends unknown> extends Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: T): R;
    compose<V extends unknown>(arg0: (param0: V) => T): (param0: V) => R;
}