import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PerspectiveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CheckScreenHandlerTypeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenHandlerTypeValueGroup.d.ts'
import type { CheckScreenTitleValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenTitleValueGroup.d.ts'
/**
 * Automatically goes into F5 mode when opening the inventory
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAutoF5.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAutoF5.kt:30}
 */
export class ModuleAutoF5 extends ClientModule {
    static INSTANCE: ModuleAutoF5;
    // private checkScreenHandlerType: CheckScreenHandlerTypeValueGroup;
    // private checkScreenTitle: CheckScreenTitleValueGroup;
    // private perspectiveHandler: EventHook<PerspectiveEvent>;
}