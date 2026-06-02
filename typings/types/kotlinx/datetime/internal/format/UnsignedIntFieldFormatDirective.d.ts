import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { UnsignedFieldSpec } from '../../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class UnsignedIntFieldFormatDirective<Target extends Object | number | string | boolean> extends Object implements FieldFormatDirective<Target> {
    constructor(field: UnsignedFieldSpec<Target>, minDigits: number, spacePadding: number | null)
    readonly field: UnsignedFieldSpec<Target>;
    // private maxDigits: number;
    // private minDigits: number;
    // private spacePadding: number | null;
    formatter(): FormatterStructure<Target>;
    parser(): ParserStructure<Target>;
}