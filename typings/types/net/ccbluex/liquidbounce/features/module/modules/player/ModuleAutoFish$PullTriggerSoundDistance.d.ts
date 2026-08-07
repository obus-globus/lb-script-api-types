import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * This is useful to prevent false triggers when the sound is played
 * from a different position than our fishing hook.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt:75}
 */
export class ModuleAutoFish$PullTriggerSoundDistance extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFish$PullTriggerSoundDistance;
    readonly distance: number;
}