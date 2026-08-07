import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
import type { PredictFeature$CalculationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$CalculationMode.d.ts'
import type { PredictFeature$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature$Companion.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Tries to run calculations with simulated player positions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt:39}
 */
export abstract class PredictFeature extends ToggleableValueGroup {
    static Companion: PredictFeature$Companion;
    constructor(name: string)
    /**
     * Should be higher than the place ticks. Normally about one to two tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt:54}
     */
    readonly basePlaceTicks: number;
    /**
     * How the predicted data will be used. For damage prediction only.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt:59}
     */
    readonly calculationMode: ModeValueGroup<PredictFeature$CalculationMode>;
    // private checkIntersect: boolean;
    // private /*not mapped: */ getCheckIntersect(): boolean;
    /**
     * Should normally be lower than the place ticks (except when using ID-Predict).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt:49}
     */
    readonly destroyTicks: number;
    /**
     * The ticks should be equal to `20 / cps` to get the approximate time it would take to place a crystal.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/PredictFeature.kt:44}
     */
    readonly placeTicks: number;
    getDamage(player: Player, ticks: number, crystal: Vec3, maxBlastResistance: number | null, include: BlockPos | null): DamageProvider;
    getSnapshotPos(player: Player | null, ticks: number): Vec3;
    willBeBlocked(box: AABB, target: Player | null, basePlace: boolean): boolean;
}