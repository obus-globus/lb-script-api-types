import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleSpeed$OnlyInCombat extends ToggleableValueGroup {
    static INSTANCE: ModuleSpeed$OnlyInCombat;
    readonly modes: ModeValueGroup<Mode>;
    /**
     * Controls {@link modes} activation state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt:144}
     */
    readonly running: boolean;
}