import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistrationInfo } from '../../../../../net/minecraft/core/RegistrationInfo.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface MappedRegistryAccessor<T extends Object | number | string | boolean> extends Object{
    fabric_getRegistrationInfos(): Map<ResourceKey<T>, RegistrationInfo>;
}