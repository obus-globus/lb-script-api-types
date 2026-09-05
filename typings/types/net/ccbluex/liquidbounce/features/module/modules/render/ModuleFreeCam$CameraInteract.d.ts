import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows to interact from the camera perspective. This is very useful to interact with blocks that
 * are behind the player or walls. Similar functionality to the GhostBlock module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:78}
 */
export class ModuleFreeCam$CameraInteract extends ToggleableValueGroup {
    static INSTANCE: ModuleFreeCam$CameraInteract;
    readonly lookAt: boolean;
}