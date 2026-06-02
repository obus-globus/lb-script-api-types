import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleNoSlotSet extends ClientModule {
    static INSTANCE: ModuleNoSlotSet;
    // private packetHandler: EventHook<PacketEvent>;
}