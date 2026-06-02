import type { Object } from '../../../java/lang/Object.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { NamedEnumIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/NamedEnumIntFieldFormatDirective.d.ts'
export class AmPmMarkerDirective extends NamedEnumIntFieldFormatDirective<TimeFieldContainer, AmPmMarker> {
    constructor(amString: string, pmString: string)
    // private amString: string;
    readonly builderRepresentation: string;
    // private pmString: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
}