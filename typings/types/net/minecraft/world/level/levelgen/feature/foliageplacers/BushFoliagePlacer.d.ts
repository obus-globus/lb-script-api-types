import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { TreeConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TreeConfiguration.d.ts'
import type { BlobFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/BlobFoliagePlacer.d.ts'
import type { FoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer.d.ts'
import type { FoliagePlacer$FoliageAttachment } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageAttachment.d.ts'
import type { FoliagePlacer$FoliageSetter } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageSetter.d.ts'
import type { FoliagePlacerType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacerType.d.ts'
export class BushFoliagePlacer extends BlobFoliagePlacer {
    static CODEC: Codec<FoliagePlacer>;
    static CODEC: MapCodec<BlobFoliagePlacer>;
    static CODEC: MapCodec<BushFoliagePlacer>;
    constructor(radius: IntProvider, offset: IntProvider, height: number)
    createFoliage(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, treeHeight: number, foliageAttachment: FoliagePlacer$FoliageAttachment, foliageHeight: number, leafRadius: number): void;
    createFoliage(level: WorldGenLevel, foliageSetter: FoliagePlacer$FoliageSetter, random: RandomSource, config: TreeConfiguration, treeHeight: number, foliageAttachment: FoliagePlacer$FoliageAttachment, foliageHeight: number, leafRadius: number, offset: number): void;
    shouldSkipLocation(random: RandomSource, dx: number, y: number, dz: number, currentRadius: number, doubleTrunk: boolean): boolean;
    type(): FoliagePlacerType<any>;
}