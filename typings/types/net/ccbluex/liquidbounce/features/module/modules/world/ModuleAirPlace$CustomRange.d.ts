import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { RangedValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ScrollAdjustValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.d.ts'
export class ModuleAirPlace$CustomRange extends ToggleableValueGroup {
    static INSTANCE: ModuleAirPlace$CustomRange;
    readonly range: RangedValue<number>;
    // private rangeBounds: ClosedFloatingPointRange<number>;
    // private scrollAdjust: ScrollAdjustValueGroup;
}