import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ScaffoldMovementPrediction extends ToggleableValueGroup {
    static INSTANCE: ScaffoldMovementPrediction;
    // private MAX_PLACEMENT_OFFSETS: number;
    // private bootstrapBackoff: number;
    // private /*not mapped: */ getBootstrapBackoff(): number;
    // private lastPlacementOffsets: Vec3[];
    // private predictionCutoffDistance: number;
    // private /*not mapped: */ getPredictionCutoffDistance(): number;
    // private warmupPlacements: number;
    // private /*not mapped: */ getWarmupPlacements(): number;
    getAvgPlacementPos(): Vec3 | null;
    // private getBootstrapPlacementPos(fallOffPoint: Vec3, fallOffPointToPlayer: Vec3): Vec3;
    getFallOffPositionOnLine(optimalLine: Line): Vec3 | null;
    /**
     * Calculates where the player will stand when he places the block. Useful for rotations
     *
     * @returns the predicted pos or `null` if the prediction failed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldMovementPrediction.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldMovementPrediction.kt:96}
     */
    getPredictedPlacementPos(optimalLine: Line | null): Vec3 | null;
    // private getWarmupBlendFactor(): number;
    onDisabled(): void;
    onPlace(optimalLine: Line | null, lastFallOffPosition: Vec3 | null): void;
    reset(): void;
}