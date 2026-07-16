import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { Dialog } from '../../../../../net/minecraft/server/dialog/Dialog.d.ts'
export class ClientboundShowDialogPacket extends Record implements Packet<ClientCommonPacketListener> {
    static CONTEXT_FREE_STREAM_CODEC: StreamCodec<ByteBuf, ClientboundShowDialogPacket>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundShowDialogPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(dialog: Holder<Dialog>)
    // private dialog: Holder<Dialog>;
    dialog(): Holder<Dialog>;
    equals(o: Object | null): boolean;
    handle(listener: ClientCommonPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ClientboundShowDialogPacket>;
}