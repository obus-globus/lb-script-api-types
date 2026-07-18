import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Twerk module
 *
 * Automatically sneaks and unsneaks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:31}
 */
export class ModuleTwerk extends ClientModule {
    static INSTANCE: ModuleTwerk;
    /**
     * How long each sneak / normal period is.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:36}
     */
    readonly delay: number;
    /**
     * Handles sneaking and unsneaking, has a high priority so that more important modules can override it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleTwerk.kt:41}
     */
    readonly movementInputHandler: EventHook<MovementInputEvent>;
}