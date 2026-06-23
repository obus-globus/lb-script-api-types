import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { UnsignedFieldSpec } from '../../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class NamedUnsignedIntFieldFormatDirective<Target extends unknown> extends Object implements FieldFormatDirective<Target> {
    constructor(field: UnsignedFieldSpec<Target>, values: string[], name: string)
    readonly field: UnsignedFieldSpec<Target>;
    // private name: string;
    // private values: string[];
    formatter(): FormatterStructure<Target>;
    // private getStringValue(target: Target): string;
    parser(): ParserStructure<Target>;
}