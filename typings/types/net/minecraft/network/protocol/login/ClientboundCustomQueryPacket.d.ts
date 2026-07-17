import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
import type { CustomQueryPayload } from '../../../../../net/minecraft/network/protocol/login/custom/CustomQueryPayload.d.ts'
export class ClientboundCustomQueryPacket extends Record implements Packet<ClientLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundCustomQueryPacket>;
    constructor(transactionId: number, payload: CustomQueryPayload)
    // private payload: CustomQueryPayload;
    // private transactionId: number;
    equals(o: Object | null): boolean;
    handle(listener: ClientLoginPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    payload(): CustomQueryPayload;
    toString(): string;
    transactionId(): number;
    type(): PacketType<ClientboundCustomQueryPacket>;
    // private write(output: FriendlyByteBuf): void;
}