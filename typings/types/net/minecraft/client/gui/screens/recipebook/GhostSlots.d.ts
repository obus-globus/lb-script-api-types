import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GhostSlots$GhostSlot } from '../../../../../../net/minecraft/client/gui/screens/recipebook/GhostSlots$GhostSlot.d.ts'
import type { SlotSelectTime } from '../../../../../../net/minecraft/client/gui/screens/recipebook/SlotSelectTime.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { SlotDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class GhostSlots extends Object {
    constructor(slotSelectTime: () => kotlin.Int)
    // private ingredients: Map<Slot, GhostSlots$GhostSlot>;
    // private slotSelectTime: () => kotlin.Int;
    clear(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, minecraft: Minecraft, isResultSlotBig: boolean): void;
    extractTooltip(graphics: GuiGraphicsExtractor, minecraft: Minecraft, mouseX: number, mouseY: number, hoveredSlot: Slot): void;
    setInput(slot: Slot, context: ContextMap, contents: SlotDisplay): void;
    setResult(slot: Slot, context: ContextMap, contents: SlotDisplay): void;
    // private setSlot(slot: Slot, context: ContextMap, contents: SlotDisplay, isResult: boolean): void;
}