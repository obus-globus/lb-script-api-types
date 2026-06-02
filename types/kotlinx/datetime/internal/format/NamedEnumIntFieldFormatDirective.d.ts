import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/FieldFormatDirective.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export abstract class NamedEnumIntFieldFormatDirective<Target extends Object | number | string | boolean, Type extends Object | number | string | boolean> extends Object implements FieldFormatDirective<Target> {
    constructor(field: FieldSpec<Target, Type>, mapping: Map<Type, string>, name: string)
    readonly field: FieldSpec<Target, Type>;
    // private mapping: Map<Type, string>;
    // private name: string;
    // private reverseMapping: { [key: string]: Type };
    formatter(): FormatterStructure<Target>;
    // private getStringValue(target: Target): string;
    parser(): ParserStructure<Target>;
}