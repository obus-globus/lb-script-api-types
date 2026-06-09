import type { Object } from '../../../java/lang/Object.d.ts'
export interface Function<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: T): R;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}