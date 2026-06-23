import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TransferOrigin } from '../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketSnapshot extends Record {
    constructor(packet: Packet<any>, origin: TransferOrigin, timestamp: number)
    // private origin: TransferOrigin;
    /*not mapped: */ origin(): TransferOrigin;
    // private packet: Packet<any>;
    /*not mapped: */ packet(): Packet<any>;
    // private timestamp: number;
    /*not mapped: */ timestamp(): number;
    component1(): Packet<any>;
    component2(): TransferOrigin;
    component3(): number;
    copy(packet: Packet<any>, origin: TransferOrigin, timestamp: number): PacketSnapshot;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}