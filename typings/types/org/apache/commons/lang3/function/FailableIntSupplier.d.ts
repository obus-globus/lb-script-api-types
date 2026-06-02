import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableIntSupplier<E extends Throwable> extends Object{
    getAsInt(): number;
}