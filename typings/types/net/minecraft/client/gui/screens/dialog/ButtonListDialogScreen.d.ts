import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { DialogConnectionAccess } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { DialogControlSet } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogControlSet.d.ts'
import type { DialogScreen } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ActionButton } from '../../../../../../net/minecraft/server/dialog/ActionButton.d.ts'
import type { ButtonListDialog } from '../../../../../../net/minecraft/server/dialog/ButtonListDialog.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class ButtonListDialogScreen<T extends ButtonListDialog> extends DialogScreen<T> {
    static DISCONNECT: Component;
    static FOOTER_MARGIN: number;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(previousScreen: Screen, dialog: T, connectionAccess: DialogConnectionAccess)
    createListActions(dialog: T, connectionAccess: DialogConnectionAccess): Stream<ActionButton>;
    populateBodyElements(layout: LinearLayout, controlSet: DialogControlSet, dialog: T, connectionAccess: DialogConnectionAccess): void;
    updateHeaderAndFooter(layout: HeaderAndFooterLayout, controlSet: DialogControlSet, dialog: T, connectionAccess: DialogConnectionAccess): void;
}