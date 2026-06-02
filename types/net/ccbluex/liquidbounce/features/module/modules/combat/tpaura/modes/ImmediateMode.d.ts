import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { TpAuraMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/tpaura/TpAuraMode.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ImmediateMode extends TpAuraMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ImmediateMode;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private travel(position: Vec3): void;
}