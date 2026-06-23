import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableToIntFunction<T extends unknown, E extends Throwable> extends Object{
    applyAsInt(arg0: T): number;
}