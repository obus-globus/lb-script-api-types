import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class NumberConsumptionError$WrongConstant extends Object implements NumberConsumptionError {
    constructor(expected: string)
    readonly expected: string;
    errorMessage(): string;
}