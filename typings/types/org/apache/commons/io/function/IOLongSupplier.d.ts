import type { LongSupplier } from '../../../../../java/util/function/LongSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOLongSupplier extends Object {
    asSupplier(): () => number;
    getAsLong(): number;
}