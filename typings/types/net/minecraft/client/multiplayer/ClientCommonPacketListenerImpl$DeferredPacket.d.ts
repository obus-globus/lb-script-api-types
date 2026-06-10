import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerboundPacketListener } from '../../../../net/minecraft/network/ServerboundPacketListener.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
export class ClientCommonPacketListenerImpl$DeferredPacket extends Record {
    // private expirationTime: number;
    // private packet: Packet<ServerboundPacketListener>;
    // private sendCondition: () => boolean;
    equals(o: Object | null): boolean;
    expirationTime(): number;
    hashCode(): number;
    packet(): Packet<ServerboundPacketListener>;
    sendCondition(): () => boolean;
    toString(): string;
}