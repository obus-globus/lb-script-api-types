import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Dynamic } from '../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Lifecycle } from '../../../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { CreateWorldScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/CreateWorldScreen.d.ts'
import type { WorldCreationContext } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext.d.ts'
import type { DownloadedPackSource } from '../../../../../../net/minecraft/client/resources/server/DownloadedPackSource.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LayeredRegistryAccess } from '../../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { WorldLoader$DataLoadContext } from '../../../../../../net/minecraft/server/WorldLoader$DataLoadContext.d.ts'
import type { WorldLoader$DataLoadOutput } from '../../../../../../net/minecraft/server/WorldLoader$DataLoadOutput.d.ts'
import type { WorldLoader$PackConfig } from '../../../../../../net/minecraft/server/WorldLoader$PackConfig.d.ts'
import type { WorldLoader$ResultFactory } from '../../../../../../net/minecraft/server/WorldLoader$ResultFactory.d.ts'
import type { WorldLoader$WorldDataSupplier } from '../../../../../../net/minecraft/server/WorldLoader$WorldDataSupplier.d.ts'
import type { WorldStem } from '../../../../../../net/minecraft/server/WorldStem.d.ts'
import type { PackRepository } from '../../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { CloseableResourceManager } from '../../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
import type { UpgradeProgress } from '../../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { LevelSettings } from '../../../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
import type { WorldOptions } from '../../../../../../net/minecraft/world/level/levelgen/WorldOptions.d.ts'
import type { LevelDataAndDimensions$WorldDataAndGenSettings } from '../../../../../../net/minecraft/world/level/storage/LevelDataAndDimensions$WorldDataAndGenSettings.d.ts'
import type { LevelStorageSource } from '../../../../../../net/minecraft/world/level/storage/LevelStorageSource.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { LevelSummary } from '../../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class WorldOpenFlows extends Object {
    static confirmWorldCreation(paramminecraft: Minecraft, paramparent: CreateWorldScreen, paramlifecycle: Lifecycle, paramtask: () => void, paramskipWarning: boolean): void;
    constructor(minecraft: Minecraft, levelSource: LevelStorageSource)
    // private levelSource: LevelStorageSource;
    // private minecraft: Minecraft;
    // private askForBackup(levelAccess: LevelStorageSource$LevelStorageAccess, oldCustomized: boolean, proceedCallback: () => void, cancelCallback: () => void): void;
    // private createBackupAndOpenWorld(levelAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, onCancel: () => void, backup: boolean): void;
    createFreshLevel(levelId: string, levelSettings: LevelSettings, options: WorldOptions, dimensionsProvider: (param0: HolderLookup$Provider) => WorldDimensions, parentScreen: Screen): void;
    createLevelFromExistingSettings(levelSourceAccess: LevelStorageSource$LevelStorageAccess, serverResources: ReloadableServerResources, registryAccess: LayeredRegistryAccess<RegistryLayer>, worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings, gameRules: Optional<GameRules>): void;
    // private createWorldAccess(levelId: string): LevelStorageSource$LevelStorageAccess;
    // private loadBundledResourcePack(packSource: DownloadedPackSource, levelSourceAccess: LevelStorageSource$LevelStorageAccess): CompletableFuture<void>;
    // private loadWorldDataBlocking<R extends unknown, D extends unknown>(packConfig: WorldLoader$PackConfig, worldDataGetter: (param0: WorldLoader$DataLoadContext) => WorldLoader$DataLoadOutput<D>, worldDataSupplier: (param0: CloseableResourceManager, param1: ReloadableServerResources, param2: LayeredRegistryAccess<RegistryLayer>, param3: D) => R): R;
    loadWorldStem(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, safeMode: boolean, packRepository: PackRepository): WorldStem;
    openWorld(levelId: string, onCancel: () => void): void;
    // private openWorldCheckDiskSpace(worldAccess: LevelStorageSource$LevelStorageAccess, worldStem: WorldStem, packSource: DownloadedPackSource, packRepository: PackRepository, onCancel: () => void): void;
    // private openWorldCheckVersionCompatibility(worldAccess: LevelStorageSource$LevelStorageAccess, summary: LevelSummary, levelDataTag: Dynamic<Object>, onCancel: () => void): void;
    // private openWorldCheckWorldStemCompatibility(worldAccess: LevelStorageSource$LevelStorageAccess, worldStem: WorldStem, packRepository: PackRepository, onCancel: () => void): void;
    // private openWorldDoLoad(worldAccess: LevelStorageSource$LevelStorageAccess, worldStem: WorldStem, packRepository: PackRepository): void;
    // private openWorldLoadBundledResourcePack(worldAccess: LevelStorageSource$LevelStorageAccess, worldStem: WorldStem, packRepository: PackRepository, onCancel: () => void): void;
    // private openWorldLoadLevelData(worldAccess: LevelStorageSource$LevelStorageAccess, onCancel: () => void): void;
    // private openWorldLoadLevelStem(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, safeMode: boolean, onCancel: () => void): void;
    // private promptBundledPackLoadFailure(): CompletableFuture<boolean>;
    recreateWorldData(levelSourceAccess: LevelStorageSource$LevelStorageAccess): Pair<LevelSettings, WorldCreationContext>;
    // private tryFileFixAndReportErrors(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, upgradeProgress: UpgradeProgress, cleanup: () => void): Dynamic<Object>;
    // private upgradeAndOpenWorld(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, onCancel: () => void): void;
}