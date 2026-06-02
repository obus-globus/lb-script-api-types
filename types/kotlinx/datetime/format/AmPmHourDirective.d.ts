import type { Object } from '../../../java/lang/Object.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { UnsignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/UnsignedIntFieldFormatDirective.d.ts'
export class AmPmHourDirective extends UnsignedIntFieldFormatDirective<TimeFieldContainer> {
    constructor(padding: Padding)
    readonly builderRepresentation: string;
    // private padding: Padding;
    equals(other: Object | null): boolean;
    hashCode(): number;
}