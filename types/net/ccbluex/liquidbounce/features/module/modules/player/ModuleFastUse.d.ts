import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFastUse$UseConditions } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastUse$UseConditions.d.ts'
import type { MovePacketType } from '../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
/**
 * FastUse module
 *
 * Allows you to use items faster on legacy servers.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastUse.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastUse.kt:47}
 */
export class ModuleFastUse extends ClientModule {
    static INSTANCE: ModuleFastUse;
    readonly accelerateNow: boolean;
    // private conditions: ModuleFastUse$UseConditions[];
    // private /*not mapped: */ getConditions(): ModuleFastUse$UseConditions[];
    // private modes: ModeValueGroup<Mode>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    // private stopInput: boolean;
    // private /*not mapped: */ getStopInput(): boolean;
}