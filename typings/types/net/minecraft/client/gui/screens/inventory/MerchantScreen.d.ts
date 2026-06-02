import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { MerchantScreen$TradeOfferButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/MerchantScreen$TradeOfferButton.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MerchantMenu } from '../../../../../../net/minecraft/world/inventory/MerchantMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { MerchantOffer } from '../../../../../../net/minecraft/world/item/trading/MerchantOffer.d.ts'
export class MerchantScreen extends AbstractContainerScreen<MerchantMenu> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: MerchantMenu, inventory: (Object | null)[], title: Component)
    // private isDragging: boolean;
    // private scrollOff: number;
    // private shopItem: number;
    // private tradeOfferButtons: MerchantScreen$TradeOfferButton[];
    // private canScroll(numberOfOffers: number): boolean;
    // private extractAndDecorateCostA(graphics: GuiGraphicsExtractor, costA: ItemStack, baseCostA: ItemStack, sellItem1X: number, decorHeight: number): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractButtonArrows(graphics: GuiGraphicsExtractor, offer: MerchantOffer, xo: number, decorHeight: number): void;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractLabels(graphics: GuiGraphicsExtractor, xm: number, ym: number): void;
    // private extractProgressBar(graphics: GuiGraphicsExtractor, xo: number, yo: number, offer: MerchantOffer): void;
    // private extractScroller(graphics: GuiGraphicsExtractor, xo: number, yo: number, mouseX: number, mouseY: number, offers: (Object | null)[]): void;
    init(): void;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    // private postButtonClick(): void;
}