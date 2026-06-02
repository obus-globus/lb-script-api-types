import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { RegistryLoadTask } from '../../../net/minecraft/resources/RegistryLoadTask.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryDataLoader$LoaderFactory extends Object{
    create(data: RegistryDataLoader$RegistryData<T>, loadingErrors: Map<ResourceKey<Object>, Exception>): RegistryLoadTask<T>;
}