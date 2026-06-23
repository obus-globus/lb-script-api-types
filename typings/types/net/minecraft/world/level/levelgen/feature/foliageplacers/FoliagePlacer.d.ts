import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { FoliagePlacer$FoliageAttachment } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageAttachment.d.ts'
import type { FoliagePlacer$FoliageSetter } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageSetter.d.ts'
import type { FoliagePlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacerType.d.ts'
export abstract class FoliagePlacer extends Object {
    static CODEC: Codec<FoliagePlacer>;
    constructor(radius: IntProvider, offset: IntProvider)
    // private offset: IntProvider;
    // private radius: IntProvider;
    createFoliage(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, treeHeight: number, foliageAttachment: FoliagePlacer$FoliageAttachment, foliageHeight: number, leafRadius: number): void;
    createFoliage(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, treeHeight: number, foliageAttachment: FoliagePlacer$FoliageAttachment, foliageHeight: number, leafRadius: number, offset: number): void;
    foliageHeight(random: RandomSource, treeHeight: number, config: TreeConfiguration): number;
    foliageRadius(random: RandomSource, trunkHeight: number): number;
    // private offset(random: RandomSource): number;
    placeLeavesRow(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, origin: BlockPos, currentRadius: number, y: number, doubleTrunk: boolean): void;
    placeLeavesRowWithHangingLeavesBelow(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, origin: BlockPos, currentRadius: number, y: number, doubleTrunk: boolean, hangingLeavesChance: number, hangingLeavesExtensionChance: number): void;
    shouldSkipLocation(random: RandomSource, dx: number, y: number, dz: number, currentRadius: number, doubleTrunk: boolean): boolean;
    shouldSkipLocationSigned(random: RandomSource, dx: number, y: number, dz: number, currentRadius: number, doubleTrunk: boolean): boolean;
    type(): FoliagePlacerType<any>;
}