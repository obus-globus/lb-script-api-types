import type { OffsetFields$sign$1 } from '../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen$drawInventoryTag$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { UnsignedFieldSpec } from '../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
export class OffsetFields extends Object {
    static INSTANCE: OffsetFields;
    readonly minutesOfHour: UnsignedFieldSpec<UtcOffsetFieldContainer>;
    readonly secondsOfMinute: UnsignedFieldSpec<UtcOffsetFieldContainer>;
    // private sign: OffsetFields$sign$1;
    readonly totalHoursAbs: UnsignedFieldSpec<UtcOffsetFieldContainer>;
}