import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export class TagPredicate<T extends unknown> extends Record {
    static codec<T extends unknown>(paramregistryKey: ResourceKey<T[]>): Codec<TagPredicate<T>>;
    static is<T extends unknown>(paramtag: TagKey<T>): TagPredicate<T>;
    static isNot<T extends unknown>(paramtag: TagKey<T>): TagPredicate<T>;
    constructor(tag: TagKey<T>, expected: boolean)
    // private expected: boolean;
    // private tag: TagKey<T>;
    equals(o: Object | null): boolean;
    expected(): boolean;
    hashCode(): number;
    matches(holder: Holder<T>): boolean;
    tag(): TagKey<T>;
    toString(): string;
}