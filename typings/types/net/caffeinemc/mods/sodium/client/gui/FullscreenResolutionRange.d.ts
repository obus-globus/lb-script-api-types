import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SteppedValidator } from '../../../../../../net/caffeinemc/mods/sodium/api/config/option/SteppedValidator.d.ts'
export class FullscreenResolutionRange extends Object implements SteppedValidator {
    constructor()
    getValidatedValue(arg0: number, arg1: () => number): number;
    isValueValid(arg0: number): boolean;
    isValueValid(arg0: number): boolean;
    max(): number;
    min(): number;
    step(): number;
}