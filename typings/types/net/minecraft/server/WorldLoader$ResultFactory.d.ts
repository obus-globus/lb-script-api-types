import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { CloseableResourceManager } from '../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export interface WorldLoader$ResultFactory<D extends unknown, R extends unknown> extends Object{
    create(resources: CloseableResourceManager, managers: ReloadableServerResources, registries: LayeredRegistryAccess<RegistryLayer>, cookie: D): R;
}