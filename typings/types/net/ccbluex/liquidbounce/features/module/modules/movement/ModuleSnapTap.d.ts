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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSnapTap.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSnapTap.kt:37}
 */
export class ModuleSnapTap extends ClientModule {
    static INSTANCE: ModuleSnapTap;
    // private horizontal: ModuleSnapTap$AxisState;
    readonly onKeyState: EventHook<KeyboardKeyEvent>;
    readonly onMovementInput: EventHook<MovementInputEvent>;
    // private vertical: ModuleSnapTap$AxisState;
}