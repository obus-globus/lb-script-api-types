import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
export class ModuleSneak$Vanilla extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleSneak$Vanilla;
    // private networkSneaking: boolean;
    // private networkTick: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<Mode>;
    // private sneakNetworkHandler: EventHook<PacketEvent>;
    disable(): void;
}