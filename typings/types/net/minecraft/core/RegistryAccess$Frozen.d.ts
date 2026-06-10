import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryAccess$Frozen extends Object, RegistryAccess{
    freeze(): RegistryAccess$Frozen;
    listRegistryKeys(): Stream<ResourceKey<(Object | null)[]>>;
    lookupOrThrow<E extends Object | number | string | boolean>(name: ResourceKey<E[]>): E[];
}