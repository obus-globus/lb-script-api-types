import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BendingTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/BendingTrunkPlacer.d.ts'
import type { CherryTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/CherryTrunkPlacer.d.ts'
import type { DarkOakTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/DarkOakTrunkPlacer.d.ts'
import type { FancyTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/FancyTrunkPlacer.d.ts'
import type { ForkingTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/ForkingTrunkPlacer.d.ts'
import type { GiantTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/GiantTrunkPlacer.d.ts'
import type { MegaJungleTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/MegaJungleTrunkPlacer.d.ts'
import type { StraightTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/StraightTrunkPlacer.d.ts'
import type { TrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacer.d.ts'
import type { UpwardsBranchingTrunkPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/UpwardsBranchingTrunkPlacer.d.ts'
export class TrunkPlacerType<P extends TrunkPlacer> extends Object {
    static BENDING_TRUNK_PLACER: TrunkPlacerType<BendingTrunkPlacer>;
    static CHERRY_TRUNK_PLACER: TrunkPlacerType<CherryTrunkPlacer>;
    static DARK_OAK_TRUNK_PLACER: TrunkPlacerType<DarkOakTrunkPlacer>;
    static FANCY_TRUNK_PLACER: TrunkPlacerType<FancyTrunkPlacer>;
    static FORKING_TRUNK_PLACER: TrunkPlacerType<ForkingTrunkPlacer>;
    static GIANT_TRUNK_PLACER: TrunkPlacerType<GiantTrunkPlacer>;
    static MEGA_JUNGLE_TRUNK_PLACER: TrunkPlacerType<MegaJungleTrunkPlacer>;
    static STRAIGHT_TRUNK_PLACER: TrunkPlacerType<StraightTrunkPlacer>;
    static UPWARDS_BRANCHING_TRUNK_PLACER: TrunkPlacerType<UpwardsBranchingTrunkPlacer>;
    constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}