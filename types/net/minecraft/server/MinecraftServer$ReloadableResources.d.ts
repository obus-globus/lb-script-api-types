import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ReloadableServerResources } from '../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { CloseableResourceManager } from '../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export class MinecraftServer$ReloadableResources extends Record implements AutoCloseable {
    constructor(resourceManager: CloseableResourceManager, managers: ReloadableServerResources)
    // private managers: ReloadableServerResources;
    // private resourceManager: CloseableResourceManager;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    managers(): ReloadableServerResources;
    resourceManager(): CloseableResourceManager;
    toString(): string;
}