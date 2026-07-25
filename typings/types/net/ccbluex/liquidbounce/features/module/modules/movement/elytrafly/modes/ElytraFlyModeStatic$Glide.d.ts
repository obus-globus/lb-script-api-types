import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows you to add a glide effect when you're not moving.
 * This can prevent you from getting kicked for "flying is not enabled on this server" when you're not moving.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt:41}
 */
export class ElytraFlyModeStatic$Glide extends ToggleableValueGroup {
    static INSTANCE: ElytraFlyModeStatic$Glide;
    readonly horizontalGlide: number;
    /**
     * How fast the static glide should be.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt:46}
     */
    readonly verticalGlide: number;
}