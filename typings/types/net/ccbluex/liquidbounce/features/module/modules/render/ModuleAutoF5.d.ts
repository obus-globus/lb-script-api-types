import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PerspectiveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CheckScreenHandlerTypeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenHandlerTypeValueGroup.d.ts'
import type { CheckScreenTitleValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenTitleValueGroup.d.ts'
/**
 * Automatically goes into F5 mode when opening the inventory
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAutoF5.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAutoF5.kt:33}
 */
export class ModuleAutoF5 extends ClientModule {
    static INSTANCE: ModuleAutoF5;
    // private checkScreenHandlerType: CheckScreenHandlerTypeValueGroup;
    // private checkScreenTitle: CheckScreenTitleValueGroup;
    // private perspectiveHandler: EventHook<PerspectiveEvent>;
}