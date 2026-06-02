import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { LinearLayout } from '../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { ConfirmScreen } from '../../../../../net/minecraft/client/gui/screens/ConfirmScreen.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConfirmLinkScreen extends ConfirmScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static confirmLink(paramparentScreen: Screen, paramuri: string): Button$OnPress;
    static confirmLink(paramparentScreen: Screen, paramuri: string, paramtrusted: boolean): Button$OnPress;
    static confirmLink(paramparentScreen: Screen, paramuri: URI): Button$OnPress;
    static confirmLink(paramparentScreen: Screen, paramuri: URI, paramtrusted: boolean): Button$OnPress;
    static confirmLinkNow(paramparentScreen: Screen, paramuri: string): void;
    static confirmLinkNow(paramparentScreen: Screen, paramuri: string, paramtrusted: boolean): void;
    static confirmLinkNow(paramparentScreen: Screen, paramuri: URI): void;
    static confirmLinkNow(paramparentScreen: Screen, paramuri: URI, paramtrusted: boolean): void;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(callback: (param0: boolean) => void, url: string, trusted: boolean)
    constructor(callback: (param0: boolean) => void, title: Component, uri: URI, trusted: boolean)
    constructor(callback: (param0: boolean) => void, title: Component, url: string, trusted: boolean)
    constructor(callback: (param0: boolean) => void, title: Component, message: Component, uri: URI, noButton: Component, trusted: boolean)
    constructor(callback: (param0: boolean) => void, title: Component, message: Component, url: string, noButtonComponent: Component, trusted: boolean)
    // private showWarning: boolean;
    // private url: string;
    addAdditionalText(): void;
    addButtons(buttonLayout: LinearLayout): void;
    copyToClipboard(): void;
}