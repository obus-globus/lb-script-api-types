import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PercentageChance } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
import type { VelocityModify$VelocityTriggerFilter } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityModify$VelocityTriggerFilter.d.ts'
export class VelocityModify extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityModify;
    // private chance: PercentageChance<number>;
    // private considerExplosion: boolean;
    // private /*not mapped: */ getConsiderExplosion(): boolean;
    // private filter: VelocityModify$VelocityTriggerFilter;
    // private /*not mapped: */ getFilter(): VelocityModify$VelocityTriggerFilter;
    // private horizontal: number;
    // private /*not mapped: */ getHorizontal(): number;
    // private motionHorizontal: number;
    // private /*not mapped: */ getMotionHorizontal(): number;
    // private motionVertical: number;
    // private /*not mapped: */ getMotionVertical(): number;
    // private onlyMove: boolean;
    // private /*not mapped: */ getOnlyMove(): boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private transactionBuffer: number;
    // private transactionBufferAmount: number;
    // private /*not mapped: */ getTransactionBufferAmount(): number;
    // private vertical: number;
    // private /*not mapped: */ getVertical(): number;
    disable(): void;
}