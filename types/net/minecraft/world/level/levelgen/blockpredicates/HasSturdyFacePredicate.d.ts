import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockPredicateType } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class HasSturdyFacePredicate extends Object implements BlockPredicate {
    static CODEC: Codec<BlockPredicate>;
    static CODEC: MapCodec<HasSturdyFacePredicate>;
    static ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate;
    static ONLY_IN_AIR_PREDICATE: BlockPredicate;
    static allOf(parampredicates: BlockPredicate[]): BlockPredicate;
    static allOf(parama: BlockPredicate, paramb: BlockPredicate): BlockPredicate;
    static allOf(parampredicates: (Object | null)[]): BlockPredicate;
    static alwaysTrue(): BlockPredicate;
    static anyOf(parampredicates: BlockPredicate[]): BlockPredicate;
    static anyOf(parama: BlockPredicate, paramb: BlockPredicate): BlockPredicate;
    static anyOf(parampredicates: (Object | null)[]): BlockPredicate;
    static hasSturdyFace(paramdirection: Direction): BlockPredicate;
    static hasSturdyFace(paramoffset: Vec3i, paramdirection: Direction): BlockPredicate;
    static insideWorld(paramoffset: Vec3i): BlockPredicate;
    static matchesBlocks(paramblocks: Block[]): BlockPredicate;
    static matchesBlocks(paramoffset: Vec3i, paramblocks: Block[]): BlockPredicate;
    static matchesBlocks(paramoffset: Vec3i, paramblocks: (Object | null)[]): BlockPredicate;
    static matchesBlocks(paramblocks: (Object | null)[]): BlockPredicate;
    static matchesFluids(paramoffset: Vec3i, paramfluids: Fluid[]): BlockPredicate;
    static matchesFluids(paramoffset: Vec3i, paramfluids: (Object | null)[]): BlockPredicate;
    static matchesFluids(paramfluids: (Object | null)[]): BlockPredicate;
    static matchesTag(paramoffset: Vec3i, paramtag: TagKey<Block>): BlockPredicate;
    static matchesTag(paramtag: TagKey<Block>): BlockPredicate;
    static noFluid(): BlockPredicate;
    static noFluid(paramoffset: Vec3i): BlockPredicate;
    static not(parampredicate: BlockPredicate): BlockPredicate;
    static replaceable(): BlockPredicate;
    static replaceable(paramoffset: Vec3i): BlockPredicate;
    static solid(): BlockPredicate;
    static solid(paramoffset: Vec3i): BlockPredicate;
    static unobstructed(): BlockPredicate;
    static unobstructed(paramoffset: Vec3i): BlockPredicate;
    static wouldSurvive(paramstate: BlockState, paramoffset: Vec3i): BlockPredicate;
    constructor(offset: Vec3i, direction: Direction)
    // private direction: Direction;
    // private offset: Vec3i;
    test(level: WorldGenLevel, origin: BlockPos): boolean;
    type(): BlockPredicateType<Object>;
}