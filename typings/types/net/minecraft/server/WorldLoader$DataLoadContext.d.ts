import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { WorldDataConfiguration } from '../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
export class WorldLoader$DataLoadContext extends Record {
    constructor(resources: ResourceManager, dataConfiguration: WorldDataConfiguration, datapackWorldgen: HolderLookup$Provider, datapackDimensions: RegistryAccess$Frozen)
    // private dataConfiguration: WorldDataConfiguration;
    // private datapackDimensions: RegistryAccess$Frozen;
    // private datapackWorldgen: HolderLookup$Provider;
    // private resources: ResourceManager;
    dataConfiguration(): WorldDataConfiguration;
    datapackDimensions(): RegistryAccess$Frozen;
    datapackWorldgen(): HolderLookup$Provider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resources(): ResourceManager;
    toString(): string;
}