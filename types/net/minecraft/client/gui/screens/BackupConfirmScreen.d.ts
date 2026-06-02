import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Checkbox } from '../../../../../net/minecraft/client/gui/components/Checkbox.d.ts'
import type { MultiLineLabel } from '../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { BackupConfirmScreen$Listener } from '../../../../../net/minecraft/client/gui/screens/BackupConfirmScreen$Listener.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BackupConfirmScreen extends Screen {
    static BACKUP_AND_JOIN: Component;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(onCancel: () => void, onProceed: BackupConfirmScreen$Listener, title: Component, description: Component, promptForCacheErase: boolean)
    constructor(onCancel: () => void, onProceed: BackupConfirmScreen$Listener, title: Component, description: Component, confirmation: Component, promptForCacheErase: boolean)
    // private confirmation: Component;
    // private description: Component;
    // private eraseCache: Checkbox;
    // private id: number;
    // private message: MultiLineLabel;
    // private onCancel: () => void;
    // private onProceed: BackupConfirmScreen$Listener;
    // private promptForCacheErase: boolean;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    keyPressed(event: KeyEvent): boolean;
    shouldCloseOnEsc(): boolean;
}