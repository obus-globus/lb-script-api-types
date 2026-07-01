import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { TransferOrigin } from '../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
/**
 * Fires for every packet sent or received, exposing the transfer origin and the packet. Cancellable - cancelling drops the packet.
 */
export class PacketEvent extends CancellableEvent {
    constructor(origin: TransferOrigin, packet: Packet<any>, original: boolean)
    readonly origin: TransferOrigin;
    readonly original: boolean;
    readonly packet: Packet<any>;
}