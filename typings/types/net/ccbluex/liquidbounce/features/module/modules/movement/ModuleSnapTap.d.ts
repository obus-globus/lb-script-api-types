import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSnapTap$AxisState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSnapTap$AxisState.d.ts'
/**
 * Snaptap module
 *
 * Prioritize the last pressed movement key.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSnapTap.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSnapTap.kt:38}
 */
export class ModuleSnapTap extends ClientModule {
    static INSTANCE: ModuleSnapTap;
    // private horizontal: ModuleSnapTap$AxisState;
    readonly onKeyState: EventHook<KeyboardKeyEvent>;
    readonly onMovementInput: EventHook<MovementInputEvent>;
    // private vertical: ModuleSnapTap$AxisState;
}