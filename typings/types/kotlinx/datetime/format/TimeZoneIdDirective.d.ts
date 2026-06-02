import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeComponentsContents } from '../../../kotlinx/datetime/format/DateTimeComponentsContents.d.ts'
import type { FieldFormatDirective } from '../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class TimeZoneIdDirective extends Object implements FieldFormatDirective<DateTimeComponentsContents> {
    constructor()
    readonly builderRepresentation: string;
    readonly field: FieldSpec<DateTimeComponentsContents, string>;
    formatter(): FormatterStructure<DateTimeComponentsContents>;
    parser(): ParserStructure<DateTimeComponentsContents>;
}