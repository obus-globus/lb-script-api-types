import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Parkour module
 *
 * Automatically jumps at the very edge of a block.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleParkour.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleParkour.kt:33}
 */
export class ModuleParkour extends ClientModule {
    static INSTANCE: ModuleParkour;
    // private simulatedTickHandler: EventHook<MovementInputEvent>;
}