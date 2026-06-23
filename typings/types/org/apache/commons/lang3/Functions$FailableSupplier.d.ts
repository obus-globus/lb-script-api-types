import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableSupplier<R extends unknown, T extends Throwable> extends Object{
    get(): R;
}