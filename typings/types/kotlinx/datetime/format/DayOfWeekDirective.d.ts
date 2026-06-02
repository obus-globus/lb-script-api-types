import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { NamedUnsignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/NamedUnsignedIntFieldFormatDirective.d.ts'
export class DayOfWeekDirective extends NamedUnsignedIntFieldFormatDirective<DateFieldContainer> {
    constructor(names: DayOfWeekNames)
    readonly builderRepresentation: string;
    // private names: DayOfWeekNames;
    equals(other: Object | null): boolean;
    hashCode(): number;
}