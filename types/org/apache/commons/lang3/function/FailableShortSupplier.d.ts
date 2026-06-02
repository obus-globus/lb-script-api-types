import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableShortSupplier<E extends Throwable> extends Object{
    getAsShort(): number;
}