import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows to interact from the camera perspective. This is very useful to interact with blocks that
 * are behind the player or walls. Similar functionality to the GhostBlock module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:81}
 */
export class ModuleFreeCam$CameraInteract extends ToggleableValueGroup {
    static INSTANCE: ModuleFreeCam$CameraInteract;
    readonly lookAt: boolean;
}