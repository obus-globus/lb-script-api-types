import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$OnPress } from '../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { PlainTextButton } from '../../../../net/minecraft/client/gui/components/PlainTextButton.d.ts'
import type { NarratableEntry } from '../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class VFPScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static setScreen(paramarg0: Screen): void;
    static showErrorScreen(paramarg0: Component, paramarg1: Throwable, paramarg2: Screen): void;
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: Component, arg1: boolean)
    // private backButton: boolean;
    prevScreen: Screen;
    readonly subtitle: Component;
    // private subtitlePressAction: Button$OnPress;
    readonly subtitleWidget: PlainTextButton;
    addRefreshButton(arg0: () => void): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    get(arg0: Screen): Screen;
    getSubtitle(): Component;
    getSubtitleWidget(): PlainTextButton;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    open(arg0: Screen): void;
    renderScreenTitle(arg0: GuiGraphicsExtractor): void;
    renderSubtitle(arg0: GuiGraphicsExtractor): void;
    renderTitle(arg0: GuiGraphicsExtractor): void;
    setupDefaultSubtitle(): void;
    setupSubtitle(arg0: Component): void;
    setupSubtitle(arg0: Component, arg1: Button$OnPress): void;
    setupUrlSubtitle(arg0: string): void;
    subtitleCentered(): boolean;
}