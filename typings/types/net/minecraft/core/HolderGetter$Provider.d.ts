import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export interface HolderGetter$Provider extends Object{
    get<T extends Object | number | string | boolean>(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get<T extends Object | number | string | boolean>(id: TagKey<T>): Optional<T[]>;
    getOrThrow<T extends Object | number | string | boolean>(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow<T extends Object | number | string | boolean>(id: TagKey<T>): T[];
    lookup<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): Optional<HolderGetter<T>>;
    lookupOrThrow<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): HolderGetter<T>;
}