import type { RealmsResetWorldScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsResetWorldScreen.d.ts'
import type { RealmCreationTask } from '../../../../../com/mojang/realmsclient/util/task/RealmCreationTask.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { WorldSelectionList } from '../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList.d.ts'
import type { WorldSelectionList$WorldListEntry } from '../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$WorldListEntry.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelSummary } from '../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class RealmsSelectFileToUploadScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static TITLE: Component;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(realmCreationTask: RealmCreationTask, realmId: number, slotId: number, lastScreen: RealmsResetWorldScreen)
    // private lastScreen: RealmsResetWorldScreen;
    // private layout: HeaderAndFooterLayout;
    // private list: WorldSelectionList;
    // private realmCreationTask: RealmCreationTask;
    // private realmId: number;
    // private searchBox: EditBox;
    // private slotId: number;
    // private uploadButton: Button;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private updateButtonState(ignored: LevelSummary): void;
    // private upload(worldListEntry: WorldSelectionList$WorldListEntry): void;
}