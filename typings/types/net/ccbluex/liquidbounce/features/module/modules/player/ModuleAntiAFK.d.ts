import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * AntiAFK module
 *
 * Prevents you from being kicked for AFK.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAntiAFK.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAntiAFK.kt:50}
 */
export class ModuleAntiAFK extends ClientModule {
    static INSTANCE: ModuleAntiAFK;
    // private modes: ModeValueGroup<Mode>;
}