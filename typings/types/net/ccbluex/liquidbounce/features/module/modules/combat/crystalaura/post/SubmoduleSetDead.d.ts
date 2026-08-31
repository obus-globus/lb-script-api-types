import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Removes hit crystals instantly from the world instead of waiting for the actual remove packet
 * what might allow faster placement.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt:33}
 */
export class SubmoduleSetDead extends ToggleableValueGroup {
    static INSTANCE: SubmoduleSetDead;
    /**
     * If the crystal was removed but no entity remove packet was sent after the confirmation time, the
     * crystal is added back to the world.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt:39}
     */
    readonly confirmTime: number;
}