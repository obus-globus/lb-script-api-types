import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { InventoryMenu } from '../../../../../net/minecraft/world/inventory/InventoryMenu.d.ts'
import type { Slot } from '../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ViewedInventoryScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(player: Function0<Player>)
    // private backgroundHeight: number;
    // private backgroundWidth: number;
    readonly handler: InventoryMenu | null;
    // private player: () => Player | null;
    // private x: number;
    // private y: number;
    // private drawBackground(context: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    // private drawItem(context: GuiGraphicsExtractor, stack: ItemStack, x: number, y: number): void;
    // private drawSlot(context: GuiGraphicsExtractor, slot: Slot): void;
    extractBackground(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, delta: number): void;
    extractRenderState(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, delta: number): void;
    protected init(): void;
    isPauseScreen(): boolean;
    // private isPointOverSlot(slot: Slot, pointX: number, pointY: number): boolean;
    keyPressed(input: KeyEvent): boolean;
    tick(): void;
}