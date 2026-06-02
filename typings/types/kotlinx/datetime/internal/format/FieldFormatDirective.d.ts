import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export interface FieldFormatDirective<Target extends Object | number | string | boolean> extends Object{
    readonly builderRepresentation: string;
    readonly field: FieldSpec<Target, Object>;
    formatter(): FormatterStructure<Target>;
    parser(): ParserStructure<Target>;
}