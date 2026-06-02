import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { CloseableResourceManager } from '../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
import type { LevelDataAndDimensions$WorldDataAndGenSettings } from '../../../net/minecraft/world/level/storage/LevelDataAndDimensions$WorldDataAndGenSettings.d.ts'
export class WorldStem extends Record implements AutoCloseable {
    constructor(resourceManager: CloseableResourceManager, dataPackResources: ReloadableServerResources, registries: LayeredRegistryAccess<RegistryLayer>, worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings)
    // private dataPackResources: ReloadableServerResources;
    // private registries: LayeredRegistryAccess<RegistryLayer>;
    // private resourceManager: CloseableResourceManager;
    // private worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings;
    close(): void;
    dataPackResources(): ReloadableServerResources;
    equals(o: Object | null): boolean;
    hashCode(): number;
    registries(): LayeredRegistryAccess<RegistryLayer>;
    resourceManager(): CloseableResourceManager;
    toString(): string;
    worldDataAndGenSettings(): LevelDataAndDimensions$WorldDataAndGenSettings;
}