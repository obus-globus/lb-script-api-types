import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableToLongFunction<T extends Object | number | string | boolean, E extends Throwable> extends Object{
    applyAsLong(arg0: T): number;
}