import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { WorldTemplatePaginatedList } from '../../../../../com/mojang/realmsclient/dto/WorldTemplatePaginatedList.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { RealmCreationTask } from '../../../../../com/mojang/realmsclient/util/task/RealmCreationTask.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsResetWorldScreen extends RealmsScreen {
    static CREATE_WORLD_RESET_TASK_TITLE: Component;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static forEmptySlot(paramlastScreen: Screen, paramslot: number, paramserverData: RealmsServer, paramresetWorldRunnable: () => void): RealmsResetWorldScreen;
    static forNewRealm(paramlastScreen: Screen, paramserverData: RealmsServer, paramrealmCreationTask: RealmCreationTask, paramresetWorldRunnable: () => void): RealmsResetWorldScreen;
    static forResetSlot(paramlastScreen: Screen, paramserverData: RealmsServer, paramresetWorldRunnable: () => void): RealmsResetWorldScreen;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, serverData: RealmsServer, slot: number, title: Component, subtitle: Component, resetTaskTitle: Component, realmCreationTask: RealmCreationTask, resetWorldRunnable: () => void)
    private constructor(lastScreen: Screen, serverData: RealmsServer, slot: number, title: Component, subtitle: Component, resetTaskTitle: Component, resetWorldRunnable: () => void)
    // private adventuremaps: WorldTemplatePaginatedList;
    // private experiences: WorldTemplatePaginatedList;
    // private inspirations: WorldTemplatePaginatedList;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private realmCreationTask: RealmCreationTask;
    // private resetTaskTitle: Component;
    // private resetWorldRunnable: () => void;
    // private serverData: RealmsServer;
    slot: number;
    // private subtitle: Component;
    // private templates: WorldTemplatePaginatedList;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    repositionElements(): void;
    // private runResetTasks(resetTask: LongRunningTask): void;
    // private templateSelectionCallback(template: WorldTemplate): void;
}