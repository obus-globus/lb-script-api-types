import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleAirPlace$Preview extends ToggleableValueGroup {
    static INSTANCE: ModuleAirPlace$Preview;
    readonly fillColor: Color4b;
    readonly outlineColor: Color4b;
    readonly outlineOnly: boolean;
}