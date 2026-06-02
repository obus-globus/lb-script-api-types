import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { MinimapHudComponent$ExtraElement$Placement } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHudComponent$ExtraElement$Placement.d.ts'
import type { MinimapHudComponent$ExtraElement$Renderer } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHudComponent$ExtraElement$Renderer.d.ts'
import type { BoundingBox2f } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class MinimapHudComponent$ExtraElement extends ToggleableValueGroup {
    constructor(name: string, size: number, draw: MinimapHudComponent$ExtraElement$Renderer)
    // private draw: MinimapHudComponent$ExtraElement$Renderer;
    readonly placement: MinimapHudComponent$ExtraElement$Placement;
    // private size: number;
    render(ctx: GuiGraphicsExtractor, boundingBox: BoundingBox2f): void;
}