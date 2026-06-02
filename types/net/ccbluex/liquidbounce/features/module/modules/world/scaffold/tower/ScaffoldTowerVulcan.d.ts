import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScaffoldTower } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.d.ts'
export class ScaffoldTowerVulcan extends ScaffoldTower {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldTowerVulcan;
    // private packetHandler: EventHook<PacketEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
}