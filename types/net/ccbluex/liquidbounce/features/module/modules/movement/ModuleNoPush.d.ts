import type { MultiChoiceListValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NoPushBy } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/NoPushBy.d.ts'
/**
 * NoPush module
 *
 * Disables pushing from other players and some other situations where someone/something can push.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPush.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPush.kt:27}
 */
export class ModuleNoPush extends ClientModule {
    static INSTANCE: ModuleNoPush;
    static canPush(paramarg0: NoPushBy): boolean;
    // private noPushBy: MultiChoiceListValue<NoPushBy>;
    // private tickHandler: EventHook<GameTickEvent>;
    canPush(by: NoPushBy): boolean;
}