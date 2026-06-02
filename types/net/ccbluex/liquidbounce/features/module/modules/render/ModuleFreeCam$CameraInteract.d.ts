import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows to interact from the camera perspective. This is very useful to interact with blocks that
 * are behind the player or walls. Similar functionality to the GhostBlock module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:75}
 */
export class ModuleFreeCam$CameraInteract extends ToggleableValueGroup {
    static INSTANCE: ModuleFreeCam$CameraInteract;
    readonly lookAt: boolean;
}