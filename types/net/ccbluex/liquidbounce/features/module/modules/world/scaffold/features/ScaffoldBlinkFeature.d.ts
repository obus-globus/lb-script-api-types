import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { ScaffoldBlinkFeature$FlushOn } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldBlinkFeature$FlushOn.d.ts'
import type { Chronometer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class ScaffoldBlinkFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldBlinkFeature;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private flushOn: ScaffoldBlinkFeature$FlushOn[];
    // private /*not mapped: */ getFlushOn(): ScaffoldBlinkFeature$FlushOn[];
    // private pulseTime: number;
    // private pulseTimer: Chronometer;
    // private time: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getTime(): { start: number; endInclusive: number; step: number };
    onBlockPlacement(): void;
}