import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOTriConsumer<T extends Object | number | string | boolean, U extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    accept(arg0: T, arg1: U, arg2: V): void;
    andThen(arg0: (param0: T, param1: U, param2: V) => void): (param0: T, param1: U, param2: V) => void;
}