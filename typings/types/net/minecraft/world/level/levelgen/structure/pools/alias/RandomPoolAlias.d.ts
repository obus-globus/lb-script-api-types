import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { StructureTemplatePool } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasBinding } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
export class RandomPoolAlias extends Record implements PoolAliasBinding {
    static CODEC: MapCodec<RandomPoolAlias>;
    constructor(alias: ResourceKey<StructureTemplatePool>, targets: WeightedList<ResourceKey<StructureTemplatePool>>)
    // private alias: ResourceKey<StructureTemplatePool>;
    // private targets: WeightedList<ResourceKey<StructureTemplatePool>>;
    alias(): ResourceKey<StructureTemplatePool>;
    allTargets(): Stream<ResourceKey<StructureTemplatePool>>;
    codec(): MapCodec<RandomPoolAlias>;
    equals(o: Object | null): boolean;
    forEachResolved(random: RandomSource, aliasAndTargetConsumer: (param0: ResourceKey<StructureTemplatePool>, param1: ResourceKey<StructureTemplatePool>) => void): void;
    hashCode(): number;
    targets(): WeightedList<ResourceKey<StructureTemplatePool>>;
    toString(): string;
}