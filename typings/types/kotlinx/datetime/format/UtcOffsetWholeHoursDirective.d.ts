import type { Object } from '../../../java/lang/Object.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { UnsignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/UnsignedIntFieldFormatDirective.d.ts'
export class UtcOffsetWholeHoursDirective extends UnsignedIntFieldFormatDirective<UtcOffsetFieldContainer> {
    constructor(padding: Padding)
    readonly builderRepresentation: string;
    // private padding: Padding;
    equals(other: Object | null): boolean;
    hashCode(): number;
}