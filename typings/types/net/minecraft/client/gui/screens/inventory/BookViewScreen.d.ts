import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ActiveTextCollector } from '../../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { BookViewScreen$BookAccess } from '../../../../../../net/minecraft/client/gui/screens/inventory/BookViewScreen$BookAccess.d.ts'
import type { PageButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/PageButton.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { ClickEvent } from '../../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BookViewScreen extends Screen {
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
    constructor()
    constructor(bookAccess: BookViewScreen$BookAccess)
    private constructor(bookAccess: BookViewScreen$BookAccess, playTurnSound: boolean)
    // private backButton: PageButton;
    readonly bookAccess: BookViewScreen$BookAccess;
    // private cachedPage: number;
    // private cachedPageComponents: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    // private currentPage: number;
    // private forwardButton: PageButton;
    // private pageMsg: Component;
    // private playTurnSound: boolean;
    // private backgroundLeft(): number;
    // private backgroundTop(): number;
    closeContainerOnServer(): void;
    createMenuControls(): void;
    createPageControlButtons(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    forcePage(page: number): boolean;
    getNarrationMessage(): Component;
    // private getNumPages(): number;
    // private getPageNumberMessage(): Component;
    handleClickEvent(event: ClickEvent): boolean;
    init(): void;
    init(width: number, height: number): void;
    isInGameUi(): boolean;
    keyPressed(event: KeyEvent): boolean;
    menuControlsTop(): number;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    pageBack(): void;
    pageForward(): void;
    setBookAccess(bookAccess: BookViewScreen$BookAccess): void;
    setPage(page: number): boolean;
    // private updateButtonVisibility(): void;
    // private visitText(collector: ActiveTextCollector, clickableOnly: boolean): void;
}