import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Easing } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
export class ModuleBlockOutline$Slide extends ToggleableValueGroup {
    static INSTANCE: ModuleBlockOutline$Slide;
    readonly easing: Easing;
    getEasing(): Easing;
    readonly time: number;
}