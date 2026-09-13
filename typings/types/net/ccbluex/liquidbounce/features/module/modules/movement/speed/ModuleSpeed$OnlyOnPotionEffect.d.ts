import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleSpeed$PotionEffectMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed$PotionEffectMode.d.ts'
export class ModuleSpeed$OnlyOnPotionEffect extends ToggleableValueGroup {
    static INSTANCE: ModuleSpeed$OnlyOnPotionEffect;
    readonly modes: ModeValueGroup<Mode>;
    getModes(): ModeValueGroup<Mode>;
    readonly potionEffects: ModeValueGroup<ModuleSpeed$PotionEffectMode>;
    /**
     * Controls {@link modes} activation state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt:167}
     */
    readonly running: boolean;
}