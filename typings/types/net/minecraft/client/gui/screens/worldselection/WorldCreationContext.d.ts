import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InitialWorldCreationOptions } from '../../../../../../net/minecraft/client/gui/screens/worldselection/InitialWorldCreationOptions.d.ts'
import type { WorldCreationContext$DimensionsUpdater } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext$DimensionsUpdater.d.ts'
import type { WorldCreationContext$OptionsModifier } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext$OptionsModifier.d.ts'
import type { LayeredRegistryAccess } from '../../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { RegistryLayer } from '../../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { WorldDataConfiguration } from '../../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
import type { WorldGenSettings } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
import type { WorldOptions } from '../../../../../../net/minecraft/world/level/levelgen/WorldOptions.d.ts'
export class WorldCreationContext extends Record {
    constructor(worldGenSettings: WorldGenSettings, loadedRegistries: LayeredRegistryAccess<RegistryLayer>, dataPackResources: ReloadableServerResources, dataConfiguration: WorldDataConfiguration)
    constructor(options: WorldOptions, datapackDimensions: LevelStem[], selectedDimensions: WorldDimensions, worldgenRegistries: LayeredRegistryAccess<RegistryLayer>, dataPackResources: ReloadableServerResources, dataConfiguration: WorldDataConfiguration, initialWorldCreationOptions: InitialWorldCreationOptions)
    constructor(worldOptions: WorldOptions, worldDimensions: WorldDimensions, loadedRegistries: LayeredRegistryAccess<RegistryLayer>, dataPackResources: ReloadableServerResources, dataConfiguration: WorldDataConfiguration, initialWorldCreationOptions: InitialWorldCreationOptions)
    // private dataConfiguration: WorldDataConfiguration;
    // private dataPackResources: ReloadableServerResources;
    // private datapackDimensions: LevelStem[];
    // private initialWorldCreationOptions: InitialWorldCreationOptions;
    // private options: WorldOptions;
    // private selectedDimensions: WorldDimensions;
    // private worldgenRegistries: LayeredRegistryAccess<RegistryLayer>;
    dataConfiguration(): WorldDataConfiguration;
    dataPackResources(): ReloadableServerResources;
    datapackDimensions(): LevelStem[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    initialWorldCreationOptions(): InitialWorldCreationOptions;
    options(): WorldOptions;
    selectedDimensions(): WorldDimensions;
    toString(): string;
    validate(): void;
    withDimensions(modifier: (param0: RegistryAccess$Frozen, param1: WorldDimensions) => WorldDimensions): WorldCreationContext;
    withOptions(modifier: WorldCreationContext$OptionsModifier): WorldCreationContext;
    withSettings(options: WorldOptions, dimensions: WorldDimensions): WorldCreationContext;
    worldgenLoadContext(): RegistryAccess$Frozen;
    worldgenRegistries(): LayeredRegistryAccess<RegistryLayer>;
}