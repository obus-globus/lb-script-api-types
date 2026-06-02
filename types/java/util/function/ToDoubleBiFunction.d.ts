import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToDoubleBiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    applyAsDouble(arg0: T, arg1: U): number;
}