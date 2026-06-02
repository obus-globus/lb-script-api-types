import type { Object } from '../../../java/lang/Object.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { NamedUnsignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/NamedUnsignedIntFieldFormatDirective.d.ts'
export class MonthNameDirective extends NamedUnsignedIntFieldFormatDirective<YearMonthFieldContainer> {
    constructor(names: MonthNames)
    readonly builderRepresentation: string;
    // private names: MonthNames;
    equals(other: Object | null): boolean;
    hashCode(): number;
}