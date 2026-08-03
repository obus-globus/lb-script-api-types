import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * SafeWalk module
 *
 * Prevents you from falling down as if you were sneaking.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt:52}
 */
export class ModuleSafeWalk extends ClientModule {
    static INSTANCE: ModuleSafeWalk;
    // private modes: ModeValueGroup<Mode>;
    safeWalkChoices(mode: ModeValueGroup<Mode>): Mode[];
}