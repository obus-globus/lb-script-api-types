import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * This is useful to prevent false triggers when the sound is played
 * from a different position than our fishing hook.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt:75}
 */
export class ModuleAutoFish$PullTriggerSoundDistance extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFish$PullTriggerSoundDistance;
    readonly distance: number;
}