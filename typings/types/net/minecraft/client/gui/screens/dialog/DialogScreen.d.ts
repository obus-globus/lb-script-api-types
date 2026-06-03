import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { ScrollableLayout } from '../../../../../../net/minecraft/client/gui/components/ScrollableLayout.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { LayoutElement } from '../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { DialogConnectionAccess } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { DialogControlSet } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogControlSet.d.ts'
import type { ClickEvent } from '../../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Dialog } from '../../../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { DialogAction } from '../../../../../../net/minecraft/server/dialog/DialogAction.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class DialogScreen<T extends Dialog> extends Screen {
    static DISCONNECT: Component;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(previousScreen: Screen, dialog: T, connectionAccess: DialogConnectionAccess)
    // private bodyScroll: ScrollableLayout;
    // private connectionAccess: DialogConnectionAccess;
    // private dialog: T;
    // private layout: HeaderAndFooterLayout;
    // private onClose: () => Optional<ClickEvent>;
    // private previousScreen: Screen;
    // private warningButton: Button;
    createTitleWithWarningButton(): LayoutElement;
    // private createWarningButton(): Button;
    // private handleDialogClickEvent(event: ClickEvent, activeScreen: Screen): void;
    init(): void;
    init(width: number, height: number): void;
    isPauseScreen(): boolean;
    makeSureWarningButtonIsInBounds(): void;
    onClose(): void;
    populateBodyElements(layout: LinearLayout, controlSet: DialogControlSet, dialog: T, connectionAccess: DialogConnectionAccess): void;
    previousScreen(): Screen;
    repositionElements(): void;
    runAction(closeAction: Optional<ClickEvent>): void;
    runAction(closeAction: Optional<ClickEvent>, afterAction: DialogAction): void;
    shouldCloseOnEsc(): boolean;
    updateHeaderAndFooter(layout: HeaderAndFooterLayout, controlSet: DialogControlSet, dialog: T, connectionAccess: DialogConnectionAccess): void;
}