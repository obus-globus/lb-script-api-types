import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Renderable } from '../../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { GuiEventListener } from '../../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
export interface ScrollableTooltip$TooltipParent extends Object{
    addRenderableWidget<T extends GuiEventListener & Renderable & NarratableEntry>(arg0: T): T;
    removeWidget(arg0: GuiEventListener): void;
}