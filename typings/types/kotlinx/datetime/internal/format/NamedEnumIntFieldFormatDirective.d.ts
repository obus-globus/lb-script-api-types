import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class NamedEnumIntFieldFormatDirective<Target extends unknown, Type extends unknown> extends Object implements FieldFormatDirective<Target> {
    constructor(field: FieldSpec<Target, Type>, mapping: JavaMap<Type, string>, name: string)
    readonly field: FieldSpec<Target, Type>;
    // private mapping: JavaMap<Type, string>;
    // private name: string;
    // private reverseMapping: JavaMap<string, Type>;
    formatter(): FormatterStructure<Target>;
    // private getStringValue(target: Target): string;
    parser(): ParserStructure<Target>;
}