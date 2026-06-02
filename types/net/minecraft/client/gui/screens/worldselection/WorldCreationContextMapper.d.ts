import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataPackReloadCookie } from '../../../../../../net/minecraft/client/gui/screens/worldselection/DataPackReloadCookie.d.ts'
import type { WorldCreationContext } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext.d.ts'
import type { LayeredRegistryAccess } from '../../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../../../../net/minecraft/server/ReloadableServerResources.d.ts'
export interface WorldCreationContextMapper extends Object{
    apply(managers: ReloadableServerResources, registries: LayeredRegistryAccess<RegistryLayer>, cookie: DataPackReloadCookie): WorldCreationContext;
}