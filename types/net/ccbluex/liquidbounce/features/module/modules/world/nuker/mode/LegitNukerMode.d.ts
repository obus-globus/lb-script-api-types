import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { CancelBlockBreakingEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/CancelBlockBreakingEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class LegitNukerMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: LegitNukerMode;
    // private cancelBlockBreakingHandler: EventHook<CancelBlockBreakingEvent>;
    // private currentTarget: BlockPos | null;
    // private forceImmediateBreak: boolean;
    // private /*not mapped: */ getForceImmediateBreak(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private rotations: RotationsValueGroup;
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
    // private switchDelay: number;
    // private /*not mapped: */ getSwitchDelay(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private wallRange: number;
    // private /*not mapped: */ getWallRange(): number;
    // private lookupTarget(): BlockPos | null;
}