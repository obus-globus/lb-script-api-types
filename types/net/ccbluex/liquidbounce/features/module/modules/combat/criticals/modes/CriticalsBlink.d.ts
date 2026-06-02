import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class CriticalsBlink extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: CriticalsBlink;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private enemyInRange: boolean;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private isInState: boolean;
    /*not mapped: */ isInState(): boolean;
    // private nextDelay: number;
    readonly parent: ModeValueGroup<Object>;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}