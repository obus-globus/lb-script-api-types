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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPush.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoPush.kt:32}
 */
export class ModuleNoPush extends ClientModule {
    static INSTANCE: ModuleNoPush;
    static canPush(by: NoPushBy): boolean;
    // private noPushBy: MultiChoiceListValue<NoPushBy>;
    // private tickHandler: EventHook<GameTickEvent>;
    canPush(by: NoPushBy): boolean;
}