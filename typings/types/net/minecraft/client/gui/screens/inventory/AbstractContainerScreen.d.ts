import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemSlotMouseAction } from '../../../../../../net/minecraft/client/gui/ItemSlotMouseAction.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen$SnapbackData } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen$SnapbackData.d.ts'
import type { MenuAccess } from '../../../../../../net/minecraft/client/gui/screens/inventory/MenuAccess.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerInput } from '../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class AbstractContainerScreen<T extends AbstractContainerMenu> extends Screen implements MenuAccess<T> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: T, inventory: (Object | null)[], title: Component)
    constructor(menu: T, inventory: (Object | null)[], title: Component, imageWidth: number, imageHeight: number)
    // private clickedSlot: Slot;
    // private doubleclick: boolean;
    // private draggingItem: ItemStack;
    // private hoveredSlot: Slot;
    // private imageHeight: number;
    // private imageWidth: number;
    // private inventoryLabelX: number;
    // private inventoryLabelY: number;
    // private isQuickCrafting: boolean;
    // private isSplittingStack: boolean;
    // private itemSlotMouseActions: ItemSlotMouseAction[];
    // private lastClickSlot: Slot;
    // private lastQuickMoved: ItemStack;
    // private leftPos: number;
    readonly menu: T;
    // private playerInventoryTitle: Component;
    // private quickCraftSlots: Slot[];
    // private quickCraftingButton: number;
    // private quickCraftingRemainder: number;
    // private quickCraftingType: number;
    // private quickdropSlot: Slot;
    // private quickdropTime: number;
    // private skipNextRelease: boolean;
    // private snapbackData: AbstractContainerScreen$SnapbackData;
    // private titleLabelX: number;
    // private titleLabelY: number;
    // private topPos: number;
    addItemSlotMouseAction(itemSlotMouseAction: ItemSlotMouseAction): void;
    checkHotbarKeyPressed(event: KeyEvent): boolean;
    // private checkHotbarMouseClicked(event: MouseButtonEvent): void;
    clearDraggingState(): void;
    containerTick(): void;
    extractCarriedItem(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractFloatingItem(graphics: GuiGraphicsExtractor, carried: ItemStack, x: number, y: number, itemCount: string): void;
    extractLabels(graphics: GuiGraphicsExtractor, xm: number, ym: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractSlot(graphics: GuiGraphicsExtractor, slot: Slot, mouseX: number, mouseY: number): void;
    // private extractSlotHighlightBack(graphics: GuiGraphicsExtractor): void;
    // private extractSlotHighlightFront(graphics: GuiGraphicsExtractor): void;
    extractSlots(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    extractSnapbackItem(graphics: GuiGraphicsExtractor): void;
    extractTooltip(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    // private getHoveredSlot(x: number, y: number): Slot;
    getMenu(): T;
    getTooltipFromContainerItem(itemStack: ItemStack): Component[];
    handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
    hasClickedOutside(mx: number, my: number, xo: number, yo: number): boolean;
    init(): void;
    init(width: number, height: number): void;
    isHovering(left: number, top: number, w: number, h: number, xm: number, ym: number): boolean;
    // private isHovering(slot: Slot, xm: number, ym: number): boolean;
    isInGameUi(): boolean;
    isPauseScreen(): boolean;
    keyPressed(event: KeyEvent): boolean;
    // private matchingItemScrollerMoveConditions(arg0: number, arg1: number): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onClose(): void;
    onMouseClickAction(slot: Slot, containerInput: ContainerInput): void;
    // private onStopHovering(slot: Slot): void;
    // private quickCraftToSlots(): void;
    // private recalculateQuickCraftRemaining(): void;
    removed(): void;
    // private shouldAddSlotToQuickCraft(slot: Slot, carried: ItemStack): boolean;
    // private showTooltipWithItemInHand(item: ItemStack): boolean;
    slotClicked(slot: Slot, slotId: number, buttonNum: number, containerInput: ContainerInput): void;
    tick(): void;
}