import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Validator } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/Validator.d.ts'
export interface SteppedValidator extends Object, Validator<number> {
    getValidatedValue(arg0: number, arg1: () => number): number;
    isValueValid(arg0: number): boolean;
    max(): number;
    min(): number;
    step(): number;
}