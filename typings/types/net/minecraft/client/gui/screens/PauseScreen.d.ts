import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { FriendsButton } from '../../../../../net/minecraft/client/gui/components/FriendsButton.d.ts'
import type { GridLayout$RowHelper } from '../../../../../net/minecraft/client/gui/layouts/GridLayout$RowHelper.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Dialog } from '../../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PauseScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(showPauseMenu: boolean)
    disconnectButton: Button;
    // private friendListUpdateListener: () => void;
    // private friends: FriendsButton;
    // private showPauseMenu: boolean;
    // private addCustomDialogButtons(minecraft: Minecraft, dialog: Holder<Dialog>, helper: GridLayout$RowHelper): void;
    // private createPauseMenu(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getCustomAdditions(): Optional<Holder<Dialog>>;
    init(): void;
    init(width: number, height: number): void;
    // private isTopmostScreen(): boolean;
    onClose(): void;
    // private onFriendListUpdate(): void;
    // private openScreenButton(message: Component, newScreen: () => Screen): Button;
    rendersNowPlayingToast(): boolean;
    showsPauseMenu(): boolean;
    tick(): void;
}