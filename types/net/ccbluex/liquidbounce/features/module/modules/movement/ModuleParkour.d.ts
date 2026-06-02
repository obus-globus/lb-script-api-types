import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Parkour module
 *
 * Automatically jumps at the very edge of a block.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleParkour.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleParkour.kt:28}
 */
export class ModuleParkour extends ClientModule {
    static INSTANCE: ModuleParkour;
    // private simulatedTickHandler: EventHook<MovementInputEvent>;
}