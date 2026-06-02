import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class OverlayRenderEvent extends Event {
    constructor(context: GuiGraphicsExtractor, tickDelta: number)
    readonly context: GuiGraphicsExtractor;
    readonly tickDelta: number;
}