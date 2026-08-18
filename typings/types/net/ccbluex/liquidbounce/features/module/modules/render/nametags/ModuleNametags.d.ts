import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/ModuleNametags.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/ModuleNametags.kt:44}
 */
export class ModuleNametags extends ClientModule {
    static INSTANCE: ModuleNametags;
    // private NAMETAG_COMPARATOR: (param0: NametagRenderState, param1: NametagRenderState) => number;
    // private backgroundRadius: number;
    /*not mapped: */ getBackgroundRadius$net_ccbluex_liquidbounce(): number;
    // private borderWidth: number;
    /*not mapped: */ getBorderWidth$net_ccbluex_liquidbounce(): number;
    readonly fontRenderer: FontRenderer;
    // private nametagPool: Pool<NametagRenderState>;
    // private nametagsToRender: NametagRenderState[];
    // private overlayRenderHandler: EventHook<OverlayRenderEvent>;
    // private scale: CurveValue;
    /*not mapped: */ getScale$net_ccbluex_liquidbounce(): CurveValue;
    // private collectAndSortNametagsToRender(): void;
    onDisabled(): void;
    onEnabled(): void;
    shouldRenderVanillaNametag(state: EntityRenderState): boolean;
}