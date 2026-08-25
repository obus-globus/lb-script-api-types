import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * SafeWalk module
 *
 * Prevents you from falling down as if you were sneaking.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt:52}
 */
export class ModuleSafeWalk extends ClientModule {
    static INSTANCE: ModuleSafeWalk;
    // private modes: ModeValueGroup<Mode>;
    safeWalkChoices(mode: ModeValueGroup<Mode>): Mode[];
}