import type { Trigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
import type { Packet } from '../../../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export abstract class PostPacketTrigger<T extends Packet<any>> extends Trigger {
    constructor(name: string, default_: boolean)
    notify(packet: T): void;
    protected postPacketHandler(packet: T): void;
}