import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * This is useful to prevent false triggers when the sound is played
 * from a different position than our fishing hook.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoFish.kt:75}
 */
export class ModuleAutoFish$PullTriggerSoundDistance extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFish$PullTriggerSoundDistance;
    readonly distance: number;
}