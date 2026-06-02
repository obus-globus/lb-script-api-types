import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
export class NoFallBlocksMC extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallBlocksMC;
    static MIN_AGE: number;
    MIN_AGE: number;
    // private fallMotion: number;
    // private packetHandler: EventHook<PacketEvent>;
    readonly running: boolean;
    // private shouldClip: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
}