import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class ReducedIntFieldDirective<Target extends unknown> extends Object implements FieldFormatDirective<Target> {
    constructor(field: FieldSpec<Target, number>, digits: number, base: number)
    // private base: number;
    // private digits: number;
    readonly field: FieldSpec<Target, number>;
    formatter(): FormatterStructure<Target>;
    parser(): ParserStructure<Target>;
}