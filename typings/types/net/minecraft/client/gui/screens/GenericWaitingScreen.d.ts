import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { MultiLineLabel } from '../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class GenericWaitingScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static createCompleted(paramtitle: Component, parammessageText: Component, parambuttonLabel: Component, parambuttonCallback: () => void): GenericWaitingScreen;
    static createWaiting(paramtitle: Component, parambuttonLabel: Component, parambuttonCallback: () => void): GenericWaitingScreen;
    static createWaitingWithoutButton(paramtitle: Component, parammessageText: Component): GenericWaitingScreen;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(title: Component, showLoadingDots: boolean, messageText: Component, buttonLabel: Component, buttonCallback: () => void, disableButtonTicks: number, showButton: boolean, closeOnEscape: boolean)
    // private button: Button;
    // private buttonCallback: () => void;
    // private buttonLabel: Component;
    // private closeOnEscape: boolean;
    // private disableButtonTicks: number;
    // private message: MultiLineLabel;
    // private messageText: Component;
    // private showButton: boolean;
    // private showLoadingDots: boolean;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
}