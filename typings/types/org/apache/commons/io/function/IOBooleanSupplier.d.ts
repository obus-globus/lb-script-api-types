import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOBooleanSupplier extends Object {
    asBooleanSupplier(): () => kotlin.Boolean;
    getAsBoolean(): boolean;
}