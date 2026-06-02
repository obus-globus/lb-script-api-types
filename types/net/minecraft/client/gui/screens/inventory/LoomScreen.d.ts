import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { BannerFlagModel } from '../../../../../../net/minecraft/client/model/object/banner/BannerFlagModel.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LoomMenu } from '../../../../../../net/minecraft/world/inventory/LoomMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BannerPatternLayers } from '../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
export class LoomScreen extends AbstractContainerScreen<LoomMenu> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: LoomMenu, inventory: (Object | null)[], title: Component)
    // private bannerStack: ItemStack;
    // private displayPatterns: boolean;
    // private dyeStack: ItemStack;
    // private flag: BannerFlagModel;
    // private hasMaxPatterns: boolean;
    // private patternStack: ItemStack;
    // private resultBannerPatterns: BannerPatternLayers;
    // private scrollOffs: number;
    // private scrolling: boolean;
    // private startRow: number;
    // private containerChanged(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractBannerOnButton(graphics: GuiGraphicsExtractor, posX: number, posY: number, bannerPatternSprite: TextureAtlasSprite): void;
    hasClickedOutside(mx: number, my: number, xo: number, yo: number): boolean;
    init(): void;
    // private isScrollBarActive(): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    // private totalRowCount(): number;
}