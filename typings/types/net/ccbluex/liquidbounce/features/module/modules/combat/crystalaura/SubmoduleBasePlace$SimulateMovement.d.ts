import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Makes sure we don't run into the placement. This does not mean the damage will be predicted at the simulated
 * position.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:83}
 */
export class SubmoduleBasePlace$SimulateMovement extends ToggleableValueGroup {
    static INSTANCE: SubmoduleBasePlace$SimulateMovement;
    /**
     * Exclude y levels we might enter to not help enemies.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:108}
     */
    readonly antiPlatform: boolean;
    /**
     * Should the bounding box also extend downwards?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:103}
     */
    readonly downError: boolean;
    /**
     * How much the players bounding box should grow with each simulated tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:93}
     */
    readonly error: number;
    /**
     * How much the error increases with each tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:98}
     */
    readonly errorStep: number;
    /**
     * How many ticks the player movement is simulated.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:88}
     */
    readonly ticks: number;
}