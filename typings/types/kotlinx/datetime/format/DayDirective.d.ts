import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { UnsignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/UnsignedIntFieldFormatDirective.d.ts'
export class DayDirective extends UnsignedIntFieldFormatDirective<DateFieldContainer> {
    constructor(padding: Padding)
    readonly builderRepresentation: string;
    // private padding: Padding;
    equals(other: Object | null): boolean;
    hashCode(): number;
}