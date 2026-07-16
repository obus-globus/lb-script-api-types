import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export class TagAliasGroup<T extends unknown> extends Record {
    static codec<T extends unknown>(paramarg0: ResourceKey<T[]>): Codec<TagAliasGroup<T>>;
    constructor(tags: TagKey<T>[])
    // private tags: TagKey<T>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    tags(): TagKey<T>[];
    toString(): string;
}