import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerStepEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerStepEvent.d.ts'
import type { PlayerStepSuccessEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerStepSuccessEvent.d.ts'
import type { MovePacketType } from '../../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
export class ModuleStep$Instant extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStep$Instant;
    // private height: number;
    // private /*not mapped: */ getHeight(): number;
    // private jumpOrder: number[];
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private simulateJumpOrder: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSimulateJumpOrder(): { start: number; endInclusive: number; step: number };
    // private stepHandler: EventHook<PlayerStepEvent>;
    // private stepSuccessEvent: EventHook<PlayerStepSuccessEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticksWait: number;
    // private trim: boolean;
    // private /*not mapped: */ getTrim(): boolean;
    // private wait: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getWait(): { start: number; endInclusive: number; step: number };
}