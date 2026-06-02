import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ActiveTextCollector } from '../../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineEditBox } from '../../../../../../net/minecraft/client/gui/components/MultiLineEditBox.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { BookSignScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/BookSignScreen.d.ts'
import type { PageButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/PageButton.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { WritableBookContent } from '../../../../../../net/minecraft/world/item/component/WritableBookContent.d.ts'
export class BookEditScreen extends Screen {
    static BACKGROUND_TEXTURE_HEIGHT: number;
    static BACKGROUND_TEXTURE_WIDTH: number;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static IMAGE_HEIGHT: number;
    static IMAGE_WIDTH: number;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static TEXT_HEIGHT: number;
    static TEXT_WIDTH: number;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(owner: Player, book: ItemStack, hand: InteractionHand, content: WritableBookContent)
    // private backButton: PageButton;
    // private book: ItemStack;
    // private currentPage: number;
    // private forwardButton: PageButton;
    // private hand: InteractionHand;
    // private numberOfPages: Component;
    // private owner: Player;
    // private page: MultiLineEditBox;
    // private pages: string[];
    // private signScreen: BookSignScreen;
    // private appendPageToBook(): void;
    // private backgroundLeft(): number;
    // private backgroundTop(): number;
    // private eraseEmptyTrailingPages(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarrationMessage(): Component;
    // private getNumPages(): number;
    // private getPageNumberMessage(): Component;
    init(): void;
    isInGameUi(): boolean;
    keyPressed(event: KeyEvent): boolean;
    // private menuControlsTop(): number;
    // private pageBack(): void;
    // private pageForward(): void;
    // private saveChanges(): void;
    setInitialFocus(): void;
    // private updateButtonVisibility(): void;
    // private updateLocalCopy(): void;
    // private updatePageContent(): void;
    // private visitText(collector: ActiveTextCollector): void;
}