import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { MapRenderState } from '../../../../../../net/minecraft/client/renderer/state/MapRenderState.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CartographyTableMenu } from '../../../../../../net/minecraft/world/inventory/CartographyTableMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { MapId } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export class CartographyTableScreen extends AbstractContainerScreen<CartographyTableMenu> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: CartographyTableMenu, inventory: (Object | null)[], title: Component)
    // private mapRenderState: MapRenderState;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractMap(graphics: GuiGraphicsExtractor, id: MapId, data: MapItemSavedData, x: number, y: number, scale: number): void;
    // private extractResultingMap(graphics: GuiGraphicsExtractor, id: MapId, data: MapItemSavedData, isDuplication: boolean, isScaling: boolean, isLocking: boolean, locked: boolean): void;
}