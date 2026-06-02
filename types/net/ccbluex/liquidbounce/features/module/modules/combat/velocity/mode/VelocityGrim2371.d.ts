import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class VelocityGrim2371 extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityGrim2371;
    // private MAX_FREEZE_TICKS: number;
    // private cancelNextVelocity: boolean;
    // private delay: boolean;
    // private freezeTicks: number;
    // private hitResult: BlockHitResult | null;
    // private needClick: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private playerTickHandler: EventHook<PlayerTickEvent>;
    // private queuePacketHandler: EventHook<BlinkPacketEvent>;
    // private shouldSkip: boolean;
    // private waitForPing: boolean;
    // private waitForUpdate: boolean;
    disable(): void;
    enable(): void;
}