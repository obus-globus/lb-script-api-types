import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { PlacementCondition } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementPositionCandidate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class CrystalAuraPlaceTargetFactory extends Object implements MinecraftShortcuts {
    static INSTANCE: CrystalAuraPlaceTargetFactory;
    // private conditionChain: PlacementCondition[];
    placementTarget: BlockPos | null;
    previousTarget: BlockPos | null;
    // private sphere: BlockPos[];
    // private evaluateCandidatePositions(basePlace: boolean, excludeIds: number[] | null, positions: PlacementPositionCandidate[]): boolean;
    // private selectOptimalCandidate(finalPositions: PlacementPositionCandidate[], currentBasePlaceTarget: PlacementPositionCandidate | null): PlacementPositionCandidate | null;
    updateSphere(): void;
    updateTarget(excludeIds: number[] | null): void;
}