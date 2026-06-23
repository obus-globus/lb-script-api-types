import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export class TagPredicate<T extends unknown> extends Record {
    static codec(paramregistryKey: ResourceKey<(Object | null)[]>): Codec<TagPredicate<Object>>;
    static is(paramtag: TagKey<Object>): TagPredicate<Object>;
    static isNot(paramtag: TagKey<Object>): TagPredicate<Object>;
    // private expected: boolean;
    // private tag: TagKey<T>;
    equals(o: Object | null): boolean;
    expected(): boolean;
    hashCode(): number;
    matches(holder: Holder<T>): boolean;
    tag(): TagKey<T>;
    toString(): string;
}