import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
export class NoFallHypixelPacket extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallHypixelPacket;
    readonly repeatable: EventHook<GameTickEvent>;
    // private void: boolean;
    // private /*not mapped: */ getVoid(): boolean;
    // private voidCheck(): boolean;
}