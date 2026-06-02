import type { IConfirmScreen } from '../../../../../com/viaversion/viafabricplus/injection/access/core/bedrock/IConfirmScreen.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { LinearLayout } from '../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConfirmScreen extends Screen implements IConfirmScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(callback: (param0: boolean) => void, title: Component, message: Component)
    constructor(callback: (param0: boolean) => void, title: Component, message: Component, yesButtonComponent: Component, noButtonComponent: Component)
    // private callback: (param0: boolean) => void;
    // private delayTicker: number;
    // private layout: LinearLayout;
    // private message: Component;
    // private noButton: Button;
    // private noButtonComponent: Component;
    // private yesButton: Button;
    // private yesButtonComponent: Component;
    addAdditionalText(): void;
    addButtons(buttonLayout: LinearLayout): void;
    getNarrationMessage(): Component;
    init(): void;
    keyPressed(event: KeyEvent): boolean;
    repositionElements(): void;
    setDelay(delay: number): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
    viaFabricPlus$updateMessage(arg0: Component): void;
}