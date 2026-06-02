import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { NoSlowBlockingReuse$TimingMode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/blocking/NoSlowBlockingReuse$TimingMode.d.ts'
export class NoSlowBlockingReuse extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoSlowBlockingReuse;
    // private networkTickHandler: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<Mode>;
    // private timingMode: NoSlowBlockingReuse$TimingMode;
    // private /*not mapped: */ getTimingMode(): NoSlowBlockingReuse$TimingMode;
}