import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleCustomAmbience$SkyColor extends ToggleableValueGroup {
    static INSTANCE: ModuleCustomAmbience$SkyColor;
    readonly color: Color4b;
}