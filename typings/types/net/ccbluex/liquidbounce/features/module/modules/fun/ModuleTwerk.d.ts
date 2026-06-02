import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Twerk module
 *
 * Automatically sneaks and unsneaks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:26}
 */
export class ModuleTwerk extends ClientModule {
    static INSTANCE: ModuleTwerk;
    /**
     * How long each sneak / normal period is.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:33}
     */
    readonly delay: number;
    /**
     * Handles sneaking and unsneaking, has a high priority so that more important modules can override it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:38}
     */
    readonly movementInputHandler: EventHook<MovementInputEvent>;
}