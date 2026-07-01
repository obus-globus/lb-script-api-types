import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
/**
 * Fires while the in-game overlay/HUD is rendered (after the world, before screens), exposing the draw context and tick delta.
 */
export class OverlayRenderEvent extends Event {
    constructor(context: GuiGraphicsExtractor, tickDelta: number)
    readonly context: GuiGraphicsExtractor;
    readonly tickDelta: number;
}