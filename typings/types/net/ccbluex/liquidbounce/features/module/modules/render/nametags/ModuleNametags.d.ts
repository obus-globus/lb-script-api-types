import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pool } from '../../../../../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { CurveValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NametagRenderState } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.d.ts'
import type { FontRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { EntityRenderState } from '../../../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
/**
 * Nametags module
 *
 * Makes player name tags more visible and adds useful information.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/ModuleNametags.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/ModuleNametags.kt:39}
 */
export class ModuleNametags extends ClientModule {
    static INSTANCE: ModuleNametags;
    // private NAMETAG_COMPARATOR: (param0: Object) => boolean;
    // private backgroundRadius: number;
    /*not mapped: */ getBackgroundRadius$liquidbounce(): number;
    // private borderWidth: number;
    /*not mapped: */ getBorderWidth$liquidbounce(): number;
    readonly fontRenderer: FontRenderer;
    // private nametagPool: Pool<NametagRenderState>;
    // private nametagsToRender: NametagRenderState[];
    // private overlayRenderHandler: EventHook<OverlayRenderEvent>;
    // private scale: CurveValue;
    /*not mapped: */ getScale$liquidbounce(): CurveValue;
    // private collectAndSortNametagsToRender(): void;
    onDisabled(): void;
    onEnabled(): void;
    shouldRenderVanillaNametag(state: EntityRenderState): boolean;
}