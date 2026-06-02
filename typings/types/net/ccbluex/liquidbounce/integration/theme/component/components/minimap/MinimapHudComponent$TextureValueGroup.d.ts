import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class MinimapHudComponent$TextureValueGroup extends ToggleableValueGroup {
    static INSTANCE: MinimapHudComponent$TextureValueGroup;
    readonly vertexColor: Color4b;
    onDisabled(): void;
    onEnabled(): void;
}