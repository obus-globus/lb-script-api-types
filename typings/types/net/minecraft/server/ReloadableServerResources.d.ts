import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataResourceStore$Mutable } from '../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Mutable.d.ts'
import type { FabricDataResourceStoreHolder } from '../../../net/fabricmc/fabric/impl/resource/FabricDataResourceStoreHolder.d.ts'
import type { Commands } from '../../../net/minecraft/commands/Commands.d.ts'
import type { Commands$CommandSelection } from '../../../net/minecraft/commands/Commands$CommandSelection.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Registry$PendingTags } from '../../../net/minecraft/core/Registry$PendingTags.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { DataComponentInitializers$PendingComponents } from '../../../net/minecraft/core/component/DataComponentInitializers$PendingComponents.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerRegistries$Holder } from '../../../net/minecraft/server/ReloadableServerRegistries$Holder.d.ts'
import type { ServerAdvancementManager } from '../../../net/minecraft/server/ServerAdvancementManager.d.ts'
import type { ServerFunctionLibrary } from '../../../net/minecraft/server/ServerFunctionLibrary.d.ts'
import type { PreparableReloadListener } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { RecipeManager } from '../../../net/minecraft/world/item/crafting/RecipeManager.d.ts'
export class ReloadableServerResources extends Object implements FabricDataResourceStoreHolder {
    static loadResources(paramresourceManager: ResourceManager, paramcontextLayers: LayeredRegistryAccess<RegistryLayer>, paramupdatedContextTags: (Object | null)[], paramenabledFeatures: FeatureFlagSet, paramcommandSelection: Commands$CommandSelection, paramfunctionCompilationPermissions: PermissionSet, parambackgroundExecutor: Executor, parammainThreadExecutor: Executor): CompletableFuture<ReloadableServerResources>;
    private constructor(fullLayers: LayeredRegistryAccess<RegistryLayer>, loadingContext: HolderLookup$Provider, enabledFeatures: FeatureFlagSet, commandSelection: Commands$CommandSelection, postponedTags: Registry$PendingTags<Object>[], functionCompilationPermissions: PermissionSet, newComponents: DataComponentInitializers$PendingComponents<Object>[])
    readonly advancements: ServerAdvancementManager;
    readonly commands: Commands;
    // private dataResourceStore: DataResourceStore$Mutable;
    // private dynamicRegistriesByType: LayeredRegistryAccess<Object>;
    // private fullRegistryHolder: ReloadableServerRegistries$Holder;
    readonly functionLibrary: ServerFunctionLibrary;
    // private layeredRegistries: RegistryAccess;
    // private newComponents: DataComponentInitializers$PendingComponents<Object>[];
    // private postponedTags: Registry$PendingTags<Object>[];
    // private recipes: RecipeManager;
    fabric$getDataResourceStore(): DataResourceStore$Mutable;
    fullRegistries(): ReloadableServerRegistries$Holder;
    getAdvancements(): ServerAdvancementManager;
    getCommands(): Commands;
    getFunctionLibrary(): ServerFunctionLibrary;
    getRecipeManager(): RecipeManager;
    listeners(): (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[];
    updateComponentsAndStaticRegistryTags(): void;
}