import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class FlyHycraftDamage extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyHycraftDamage;
    // private damageTaken: boolean;
    // private packetHandler: EventHook<BlinkPacketEvent>;
    readonly parent: ModeValueGroup<any>;
    // private release: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticks: number;
    enable(): void;
}