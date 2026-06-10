import type { Option$OptionNameSource } from '../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option$OptionNameSource.d.ts'
import type { OptionPage } from '../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionPage.d.ts'
import type { Page } from '../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { SodiumOptions } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions.d.ts'
import type { ScreenPrompt } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/prompt/ScreenPrompt.d.ts'
import type { ScreenPromptable } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/prompt/ScreenPromptable.d.ts'
import type { DonationButtonWidget } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/DonationButtonWidget.d.ts'
import type { KeyBoundButtonWidget } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/KeyBoundButtonWidget.d.ts'
import type { OptionListWidget } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/OptionListWidget.d.ts'
import type { PageListWidget } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/PageListWidget.d.ts'
import type { ScrollableTooltip } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ScrollableTooltip.d.ts'
import type { ScrollableTooltip$TooltipParent } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ScrollableTooltip$TooltipParent.d.ts'
import type { SearchWidget } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/SearchWidget.d.ts'
import type { Dim2i } from '../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class VideoSettingsScreen extends Screen implements ScreenPromptable, ScrollableTooltip$TooltipParent {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static createScreen(paramarg0: Screen): Screen;
    static createScreen(paramarg0: Screen, paramarg1: OptionPage): Screen;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static renderIconWithSpacing(paramarg0: GuiGraphicsExtractor, paramarg1: Identifier, paramarg2: number, paramarg3: boolean, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    private constructor(arg0: Screen)
    private constructor(arg0: Screen, arg1: OptionPage)
    // private applyButton: KeyBoundButtonWidget;
    // private closeButton: KeyBoundButtonWidget;
    // private dim: Dim2i;
    // private donateButton: DonationButtonWidget;
    // private hasPendingChanges: boolean;
    // private initiallyFocusedPage: OptionPage;
    // private insetX: boolean;
    // private insetY: boolean;
    // private optionList: OptionListWidget;
    // private pageList: PageListWidget;
    // private prevScreen: Screen;
    readonly prompt: ScreenPrompt;
    // private searchWidget: SearchWidget;
    // private shortcutButtons: KeyBoundButtonWidget[];
    // private tooltip: ScrollableTooltip;
    // private undoButton: KeyBoundButtonWidget;
    addRenderableWidget<T extends GuiEventListener & Renderable & NarratableEntry>(arg0: T): T;
    // private checkPromptTimers(): void;
    children(): GuiEventListener[];
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getDimensions(): Dim2i;
    getPrompt(): ScreenPrompt;
    // private hideDonationButton(): void;
    // private ifInsetX(arg0: number): number;
    // private ifInsetY(arg0: number): number;
    // private ifNotInsetX(arg0: number): number;
    // private ifNotInsetY(arg0: number): number;
    init(): void;
    init(width: number, height: number): void;
    jumpToPage(arg0: Page): void;
    keyPressed(arg0: KeyEvent): boolean;
    keyReleased(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    onClose(): void;
    // private onSearchResults(arg0: Option$OptionNameSource[]): void;
    // private onSectionFocused(arg0: Page): void;
    // private openDonationPage(): void;
    // private openDonationPrompt(arg0: SodiumOptions): void;
    // private rebuild(): void;
    // private rebuildActionButtons(arg0: boolean): void;
    removeWidget(arg0: GuiEventListener): void;
    setPrompt(arg0: ScreenPrompt): void;
    setWidgetPresence<T extends GuiEventListener & Renderable & NarratableEntry>(arg0: T, arg1: boolean): void;
    shouldCloseOnEsc(): boolean;
    // private undoChanges(): void;
    // private updateControls(arg0: number, arg1: number): void;
    // private updateScreenDimensions(): void;
    // private updateSearchWidgetWidth(): void;
}