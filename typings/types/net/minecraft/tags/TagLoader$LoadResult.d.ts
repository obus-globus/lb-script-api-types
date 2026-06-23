import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class TagLoader$LoadResult<T extends unknown> extends Record {
    constructor(key: ResourceKey<T[]>, tags: Map<TagKey<T>, Holder<T>[]>)
    // private key: ResourceKey<T[]>;
    // private tags: Map<TagKey<T>, Holder<T>[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T[]>;
    tags(): Map<TagKey<T>, Holder<T>[]>;
    toString(): string;
}