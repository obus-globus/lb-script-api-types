import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Allows to interact from the camera perspective. This is very useful to interact with blocks that
 * are behind the player or walls. Similar functionality to the GhostBlock module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeCam.kt:79}
 */
export class ModuleFreeCam$CameraInteract extends ToggleableValueGroup {
    static INSTANCE: ModuleFreeCam$CameraInteract;
    readonly lookAt: boolean;
}