import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { TransferOrigin } from '../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { BlinkManager$Action } from '../../../../../net/ccbluex/liquidbounce/features/blink/BlinkManager$Action.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
export class BlinkPacketEvent extends Event {
    constructor(packet: Packet<any> | null, origin: TransferOrigin)
    action: BlinkManager$Action;
    readonly origin: TransferOrigin;
    readonly packet: Packet<any> | null;
}