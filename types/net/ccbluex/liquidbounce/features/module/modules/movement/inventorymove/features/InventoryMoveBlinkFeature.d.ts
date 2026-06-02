import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { Chronometer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class InventoryMoveBlinkFeature extends ToggleableValueGroup {
    static INSTANCE: InventoryMoveBlinkFeature;
    // private chronometer: Chronometer;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private maximumTime: number;
    // private /*not mapped: */ getMaximumTime(): number;
    readonly screenHandler: EventHook<ScreenEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
}