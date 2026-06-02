import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup } from '../../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootDataType$ContextGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootDataType$ContextGetter.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { Validatable } from '../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContextSource } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootDataType<T extends Validatable> extends Record {
    static MODIFIER: LootDataType<LootItemFunction>;
    static PREDICATE: LootDataType<LootItemCondition>;
    static TABLE: LootDataType<LootTable>;
    static values(): Stream<Object>;
    constructor(registryKey: ResourceKey<T[]>, codec: Codec<T>, contextGetter: (param0: T) => net.minecraft.util.context.ContextKeySet)
    // private codec: Codec<T>;
    // private contextGetter: (param0: T) => net.minecraft.util.context.ContextKeySet;
    // private registryKey: ResourceKey<T[]>;
    codec(): Codec<T>;
    contextGetter(): (param0: T) => net.minecraft.util.context.ContextKeySet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    registryKey(): ResourceKey<T[]>;
    runValidation(contextSource: ValidationContextSource, lookup: HolderLookup<T>): void;
    runValidation(contextSource: ValidationContextSource, key: ResourceKey<T>, value: T): void;
    toString(): string;
}