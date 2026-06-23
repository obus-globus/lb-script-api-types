import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class SignedIntFieldFormatDirective<Target extends unknown> extends Object implements FieldFormatDirective<Target> {
    constructor(field: FieldSpec<Target, number>, minDigits: number | null, maxDigits: number | null, spacePadding: number | null, outputPlusOnExceededWidth: number | null)
    readonly field: FieldSpec<Target, number>;
    // private maxDigits: number | null;
    // private minDigits: number | null;
    // private outputPlusOnExceededWidth: number | null;
    // private spacePadding: number | null;
    formatter(): FormatterStructure<Target>;
    parser(): ParserStructure<Target>;
}