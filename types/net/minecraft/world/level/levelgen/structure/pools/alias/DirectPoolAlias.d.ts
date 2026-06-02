import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
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
import type { RandomGroupPoolAlias } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/RandomGroupPoolAlias.d.ts'
import type { RandomPoolAlias } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/RandomPoolAlias.d.ts'
export class DirectPoolAlias extends Record implements PoolAliasBinding {
    static CODEC: Codec<PoolAliasBinding>;
    static direct(paramid: string, paramtarget: string): DirectPoolAlias;
    static direct(paramalias: ResourceKey<StructureTemplatePool>, paramtarget: ResourceKey<StructureTemplatePool>): DirectPoolAlias;
    static random(paramid: string, paramtargets: WeightedList<string>): RandomPoolAlias;
    static random(paramid: ResourceKey<StructureTemplatePool>, paramtargets: WeightedList<Object>): RandomPoolAlias;
    static randomGroup(paramcombinations: WeightedList<Object>): RandomGroupPoolAlias;
    constructor(alias: ResourceKey<StructureTemplatePool>, target: ResourceKey<StructureTemplatePool>)
    // private alias: ResourceKey<StructureTemplatePool>;
    // private target: ResourceKey<StructureTemplatePool>;
    alias(): ResourceKey<StructureTemplatePool>;
    allTargets(): Stream<ResourceKey<StructureTemplatePool>>;
    codec(): MapCodec<DirectPoolAlias>;
    equals(o: Object | null): boolean;
    forEachResolved(random: RandomSource, aliasAndTargetConsumer: (param0: ResourceKey<StructureTemplatePool>, param1: ResourceKey<StructureTemplatePool>) => void): void;
    hashCode(): number;
    target(): ResourceKey<StructureTemplatePool>;
    toString(): string;
}