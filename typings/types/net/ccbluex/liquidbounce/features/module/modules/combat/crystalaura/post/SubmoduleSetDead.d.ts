import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Removes hit crystals instantly from the world instead of waiting for the actual remove packet
 * what might allow faster placement.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt:29}
 */
export class SubmoduleSetDead extends ToggleableValueGroup {
    static INSTANCE: SubmoduleSetDead;
    /**
     * If the crystal was removed but no entity remove packet was sent after the confirmation time, the
     * crystal is added back to the world.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.kt:35}
     */
    readonly confirmTime: number;
}