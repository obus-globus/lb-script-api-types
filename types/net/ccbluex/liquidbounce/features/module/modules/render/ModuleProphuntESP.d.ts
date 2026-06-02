import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleProphuntESP$Tracking } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleProphuntESP$Tracking.d.ts'
import type { PlacementRenderer } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
export class ModuleProphuntESP extends ClientModule {
    static INSTANCE: ModuleProphuntESP;
    // private networkHandler: EventHook<PacketEvent>;
    // private renderer: PlacementRenderer;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tracking: ModuleProphuntESP$Tracking[];
    // private /*not mapped: */ getTracking(): ModuleProphuntESP$Tracking[];
    onDisabled(): void;
}