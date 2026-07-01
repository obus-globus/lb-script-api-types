import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
/**
 * Fires while the current GUI screen is rendered (the topmost layer), exposing the draw context and partial-tick fraction.
 */
export class ScreenRenderEvent extends Event {
    constructor(context: GuiGraphicsExtractor, partialTicks: number)
    readonly context: GuiGraphicsExtractor;
    readonly partialTicks: number;
}