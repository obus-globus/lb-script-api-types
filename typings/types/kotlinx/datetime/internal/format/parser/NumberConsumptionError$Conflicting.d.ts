import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class NumberConsumptionError$Conflicting extends Object implements NumberConsumptionError {
    constructor(conflicting: Object)
    readonly conflicting: Object;
    errorMessage(): string;
}