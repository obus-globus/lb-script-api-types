import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiConsumer } from '../../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StructureTemplatePool } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export interface PoolAliasBinding extends Object{
    allTargets(): Stream<ResourceKey<StructureTemplatePool>>;
    codec(): MapCodec<PoolAliasBinding>;
    forEachResolved(random: RandomSource, aliasAndTargetConsumer: (param0: ResourceKey<StructureTemplatePool>, param1: ResourceKey<StructureTemplatePool>) => void): void;
}