import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * MiddleClickAction module
 *
 * Allows you to perform actions with middle clicks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMiddleClickAction.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleMiddleClickAction.kt:45}
 */
export class ModuleMiddleClickAction extends ClientModule {
    static INSTANCE: ModuleMiddleClickAction;
    // private mode: ModeValueGroup<Mode>;
    onDisabled(): void;
}