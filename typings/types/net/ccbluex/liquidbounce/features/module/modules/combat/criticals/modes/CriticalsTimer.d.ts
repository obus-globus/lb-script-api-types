import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class CriticalsTimer extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: CriticalsTimer;
    readonly parent: ModeValueGroup<Object>;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}