import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TrajectoryInfoRenderer$Type extends Enum<TrajectoryInfoRenderer$Type> {
    /**
     * From the entity holding items.
     *
     * @see {@link getHypotheticalTrajectory}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.kt:80}
     */
    static HYPOTHETICAL: TrajectoryInfoRenderer$Type;
    /**
     * From a moving entity, such as {@link net.minecraft.world.entity.projectile.Projectile}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.kt:87}
     */
    static REAL: TrajectoryInfoRenderer$Type;
    static getEntries(): TrajectoryInfoRenderer$Type[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrajectoryInfoRenderer$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "HYPOTHETICAL" | "REAL";
}