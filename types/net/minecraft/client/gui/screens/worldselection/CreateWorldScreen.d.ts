import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../../../../java/util/OptionalLong.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { CreateWorldCallback } from '../../../../../../net/minecraft/client/gui/screens/worldselection/CreateWorldCallback.d.ts'
import type { WorldCreationContext } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext.d.ts'
import type { WorldCreationUiState } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { LayeredRegistryAccess } from '../../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RegistryLayer } from '../../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { PackRepository } from '../../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelSettings } from '../../../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { WorldPreset } from '../../../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
import type { LevelDataAndDimensions$WorldDataAndGenSettings } from '../../../../../../net/minecraft/world/level/storage/LevelDataAndDimensions$WorldDataAndGenSettings.d.ts'
import type { DirectoryValidator } from '../../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class CreateWorldScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static TAB_HEADER_BACKGROUND: Identifier;
    static createFromExisting(paramminecraft: Minecraft, paramonClose: () => void, paramlevelSettings: LevelSettings, paramworldCreationContext: WorldCreationContext, paramnewDataPackDir: Path[][]): CreateWorldScreen;
    static createTempDataPackDirFromExistingWorld(paramsourcePackDir: Path[][], paramminecraft: Minecraft): Path[][];
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static openFresh(paramminecraft: Minecraft, paramonClose: () => void): void;
    static openFresh(paramminecraft: Minecraft, paramonClose: () => void, paramcreateWorld: (param0: CreateWorldScreen, param1: LayeredRegistryAccess<RegistryLayer>, param2: LevelDataAndDimensions$WorldDataAndGenSettings, param3: Optional<GameRules>, param4: Path[][]) => kotlin.Boolean): void;
    static testWorld(paramminecraft: Minecraft, paramonClose: () => void): void;
    private constructor(minecraft: Minecraft, onClose: () => void, settings: WorldCreationContext, preset: Optional<ResourceKey<WorldPreset>>, seed: OptionalLong, createWorldCallback: (param0: CreateWorldScreen, param1: LayeredRegistryAccess<RegistryLayer>, param2: LevelDataAndDimensions$WorldDataAndGenSettings, param3: Optional<GameRules>, param4: Path[][]) => kotlin.Boolean)
    // private createWorldCallback: (param0: CreateWorldScreen, param1: LayeredRegistryAccess<RegistryLayer>, param2: LevelDataAndDimensions$WorldDataAndGenSettings, param3: Optional<GameRules>, param4: Path[][]) => kotlin.Boolean;
    // private layout: HeaderAndFooterLayout;
    // private onClose: () => void;
    // private packValidator: DirectoryValidator;
    // private recreated: boolean;
    // private tabManager: TabManager;
    // private tabNavigationBar: TabNavigationBar;
    // private tempDataPackDir: Path[];
    // private tempDataPackRepository: PackRepository;
    readonly uiState: WorldCreationUiState;
    // private applyNewPackConfig(packRepository: PackRepository, newConfig: WorldDataConfiguration, onAbort: (param0: WorldDataConfiguration) => void): void;
    // private createLevelSettings(isDebug: boolean): LevelSettings;
    // private createNewWorld(finalLayers: LayeredRegistryAccess<RegistryLayer>, worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings, gameRules: Optional<GameRules>): boolean;
    // private createWorldAndCleanup(finalLayers: LayeredRegistryAccess<RegistryLayer>, worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings, gameRules: Optional<GameRules>): void;
    extractMenuBackground(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getDataPackSelectionSettings(dataConfiguration: WorldDataConfiguration): Pair<Path[], PackRepository>;
    // private getOrCreateTempDataPackDir(): Path[];
    getUiState(): WorldCreationUiState;
    init(): void;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    // private onCreate(): void;
    // private openDataPackSelectionScreen(dataConfiguration: WorldDataConfiguration): void;
    // private openExperimentsScreen(dataConfiguration: WorldDataConfiguration): void;
    popScreen(): void;
    // private removeTempDataPackDir(): void;
    repositionElements(): void;
    setInitialFocus(): void;
    // private tryApplyNewDataPacks(packRepository: PackRepository, isDataPackScreen: boolean, onAbort: (param0: WorldDataConfiguration) => void): void;
}