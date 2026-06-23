import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DecimalFraction } from '../../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class DecimalFractionFieldFormatDirective<Target extends unknown> extends Object implements FieldFormatDirective<Target> {
    constructor(field: FieldSpec<Target, DecimalFraction>, minDigits: number, maxDigits: number, zerosToAdd: number[])
    readonly field: FieldSpec<Target, DecimalFraction>;
    // private maxDigits: number;
    // private minDigits: number;
    // private zerosToAdd: number[];
    formatter(): FormatterStructure<Target>;
    parser(): ParserStructure<Target>;
}