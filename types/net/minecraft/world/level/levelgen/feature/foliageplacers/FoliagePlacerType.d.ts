import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AcaciaFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/AcaciaFoliagePlacer.d.ts'
import type { BlobFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/BlobFoliagePlacer.d.ts'
import type { BushFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/BushFoliagePlacer.d.ts'
import type { CherryFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/CherryFoliagePlacer.d.ts'
import type { DarkOakFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/DarkOakFoliagePlacer.d.ts'
import type { FancyFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FancyFoliagePlacer.d.ts'
import type { FoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer.d.ts'
import type { MegaJungleFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/MegaJungleFoliagePlacer.d.ts'
import type { MegaPineFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/MegaPineFoliagePlacer.d.ts'
import type { PineFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/PineFoliagePlacer.d.ts'
import type { RandomSpreadFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/RandomSpreadFoliagePlacer.d.ts'
import type { SpruceFoliagePlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/SpruceFoliagePlacer.d.ts'
export class FoliagePlacerType<P extends FoliagePlacer> extends Object {
    static ACACIA_FOLIAGE_PLACER: FoliagePlacerType<AcaciaFoliagePlacer>;
    static BLOB_FOLIAGE_PLACER: FoliagePlacerType<BlobFoliagePlacer>;
    static BUSH_FOLIAGE_PLACER: FoliagePlacerType<BushFoliagePlacer>;
    static CHERRY_FOLIAGE_PLACER: FoliagePlacerType<CherryFoliagePlacer>;
    static DARK_OAK_FOLIAGE_PLACER: FoliagePlacerType<DarkOakFoliagePlacer>;
    static FANCY_FOLIAGE_PLACER: FoliagePlacerType<FancyFoliagePlacer>;
    static MEGA_JUNGLE_FOLIAGE_PLACER: FoliagePlacerType<MegaJungleFoliagePlacer>;
    static MEGA_PINE_FOLIAGE_PLACER: FoliagePlacerType<MegaPineFoliagePlacer>;
    static PINE_FOLIAGE_PLACER: FoliagePlacerType<PineFoliagePlacer>;
    static RANDOM_SPREAD_FOLIAGE_PLACER: FoliagePlacerType<RandomSpreadFoliagePlacer>;
    static SPRUCE_FOLIAGE_PLACER: FoliagePlacerType<SpruceFoliagePlacer>;
    constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}