import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableBiConsumer<T extends Object | number | string | boolean, U extends Object | number | string | boolean, E extends Throwable> extends Object{
    accept(arg0: T, arg1: U): void;
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}