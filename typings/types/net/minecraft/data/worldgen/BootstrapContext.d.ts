import type { Lifecycle } from '../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface BootstrapContext<T extends Object | number | string | boolean> extends Object{
    lookup<S extends Object | number | string | boolean>(key: ResourceKey<S[]>): HolderGetter<S>;
    register(key: ResourceKey<T>, value: T): Holder$Reference<T>;
    register(key: ResourceKey<T>, value: T, lifecycle: Lifecycle): Holder$Reference<T>;
}