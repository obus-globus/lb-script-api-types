import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * MiddleClickAction module
 *
 * Allows you to perform actions with middle clicks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMiddleClickAction.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMiddleClickAction.kt:45}
 */
export class ModuleMiddleClickAction extends ClientModule {
    static INSTANCE: ModuleMiddleClickAction;
    // private mode: ModeValueGroup<Mode>;
    onDisabled(): void;
}