import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { BookViewScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/BookViewScreen.d.ts'
import type { BookViewScreen$BookAccess } from '../../../../../../net/minecraft/client/gui/screens/inventory/BookViewScreen$BookAccess.d.ts'
import type { MenuAccess } from '../../../../../../net/minecraft/client/gui/screens/inventory/MenuAccess.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContainerListener } from '../../../../../../net/minecraft/world/inventory/ContainerListener.d.ts'
import type { LecternMenu } from '../../../../../../net/minecraft/world/inventory/LecternMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class LecternScreen extends BookViewScreen implements MenuAccess<LecternMenu> {
    static BOOK_LOCATION: Identifier;
    static EMPTY_ACCESS: BookViewScreen$BookAccess;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
    static PAGE_TEXT_X_OFFSET: number;
    static PAGE_TEXT_Y_OFFSET: number;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: LecternMenu, inventory: (Object | null)[], title: Component)
    // private listener: ContainerListener;
    readonly menu: LecternMenu;
    // private bookChanged(): void;
    closeContainerOnServer(): void;
    createMenuControls(): void;
    forcePage(page: number): boolean;
    getMenu(): LecternMenu;
    init(): void;
    init(width: number, height: number): void;
    isPauseScreen(): boolean;
    onClose(): void;
    pageBack(): void;
    // private pageChanged(): void;
    pageForward(): void;
    removed(): void;
    // private sendButtonClick(button: number): void;
}