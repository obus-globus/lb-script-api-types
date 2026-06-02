import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class NumberConsumptionError$TooManyDigits extends Object implements NumberConsumptionError {
    constructor(maxDigits: number)
    readonly maxDigits: number;
    errorMessage(): string;
}