import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOTriConsumer<T extends unknown, U extends unknown, V extends unknown> extends Object {
    accept(arg0: T, arg1: U, arg2: V): void;
    andThen(arg0: (param0: T, param1: U, param2: V) => void): (param0: T, param1: U, param2: V) => void;
}