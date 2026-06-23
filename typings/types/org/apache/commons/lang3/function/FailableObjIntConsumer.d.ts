import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableObjIntConsumer<T extends unknown, E extends Throwable> extends Object{
    accept(arg0: T, arg1: number): void;
}