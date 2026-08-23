import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AntiAFK module
 *
 * Prevents you from being kicked for AFK.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAntiAFK.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAntiAFK.kt:50}
 */
export class ModuleAntiAFK extends ClientModule {
    static INSTANCE: ModuleAntiAFK;
    // private modes: ModeValueGroup<Mode>;
}