import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoRotateSet module.
 *
 * Prevents the server from rotating your head.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoRotateSet.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoRotateSet.kt:32}
 */
export class ModuleNoRotateSet extends ClientModule {
    static INSTANCE: ModuleNoRotateSet;
    readonly mode: ModeValueGroup<Mode>;
}