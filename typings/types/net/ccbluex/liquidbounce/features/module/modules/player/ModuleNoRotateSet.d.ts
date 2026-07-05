import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoRotateSet module.
 *
 * Prevents the server from rotating your head.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoRotateSet.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoRotateSet.kt:32}
 */
export class ModuleNoRotateSet extends ClientModule {
    static INSTANCE: ModuleNoRotateSet;
    readonly mode: ModeValueGroup<Mode>;
}