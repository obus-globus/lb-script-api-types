import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusableTextWidget } from '../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { LogoRenderer } from '../../../../../net/minecraft/client/gui/components/LogoRenderer.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AccessibilityOnboardingScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(options: Options, onClose: () => void)
    // private fadeInStart: number;
    // private fadeOutStart: number;
    // private fadingIn: boolean;
    // private focusableTextWidget: FocusableTextWidget;
    // private hasNarrated: boolean;
    // private layout: HeaderAndFooterLayout;
    // private logoRenderer: LogoRenderer;
    // private narratorAvailable: boolean;
    // private onClose: () => void;
    // private options: Options;
    // private timer: number;
    // private close(onboardingFinished: boolean, runnable: () => void): void;
    // private closeAndSetScreen(screen: Screen): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private handleInitialNarrationDelay(): void;
    init(): void;
    init(width: number, height: number): void;
    // private initTitleYPos(): number;
    onClose(): void;
    panoramaShouldSpin(): boolean;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
}