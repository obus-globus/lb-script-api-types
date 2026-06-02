import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class NumberConsumptionError$TooFewDigits extends Object implements NumberConsumptionError {
    constructor(minDigits: number)
    readonly minDigits: number;
    errorMessage(): string;
}