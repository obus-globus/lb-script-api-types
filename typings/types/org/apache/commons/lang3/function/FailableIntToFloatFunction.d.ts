import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableIntToFloatFunction<E extends Throwable> extends Object{
    applyAsFloat(arg0: number): number;
}