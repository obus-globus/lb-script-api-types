import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * SafeWalk module
 *
 * Prevents you from falling down as if you were sneaking.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt:52}
 */
export class ModuleSafeWalk extends ClientModule {
    static INSTANCE: ModuleSafeWalk;
    // private modes: ModeValueGroup<Mode>;
    safeWalkChoices(mode: ModeValueGroup<Mode>): Mode[];
}