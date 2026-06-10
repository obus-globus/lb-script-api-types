import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOIntSupplier extends Object {
    asIntSupplier(): () => number;
    getAsInt(): number;
}