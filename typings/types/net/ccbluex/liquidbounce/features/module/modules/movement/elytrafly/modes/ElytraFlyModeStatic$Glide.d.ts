import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows you to add a glide effect when you're not moving.
 * This can prevent you from getting kicked for "flying is not enabled on this server" when you're not moving.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt:37}
 */
export class ElytraFlyModeStatic$Glide extends ToggleableValueGroup {
    static INSTANCE: ElytraFlyModeStatic$Glide;
    readonly horizontalGlide: number;
    /**
     * How fast the static glide should be.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt:43}
     */
    readonly verticalGlide: number;
}