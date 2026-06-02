import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityTypePredicate extends Record {
    static CODEC: Codec<EntityTypePredicate>;
    static of(paramlookup: HolderGetter<Object>, paramtype: TagKey<Object>): EntityTypePredicate;
    static of(paramlookup: HolderGetter<Object>, paramtype: EntityType<Object>): EntityTypePredicate;
    constructor(types: Holder<T>[])
    // private types: Holder<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(type: Holder<EntityType<Object>>): boolean;
    toString(): string;
    types(): Holder<T>[];
}