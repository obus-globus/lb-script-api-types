import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ModuleAutoBuild$AutoBuildMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild$AutoBuildMode.d.ts'
import type { NetherPortal } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.d.ts'
import type { PortalMode$Phase } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/PortalMode$Phase.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class PortalMode extends ModuleAutoBuild$AutoBuildMode {
    static Companion: Tagged$Companion;
    static INSTANCE: PortalMode;
    // private phase: PortalMode$Phase;
    // private portal: NetherPortal | null;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    disabled(): void;
    enabled(): void;
    // private getPortal(): NetherPortal | null;
    getSlot(): HotbarItemSlot | null;
}