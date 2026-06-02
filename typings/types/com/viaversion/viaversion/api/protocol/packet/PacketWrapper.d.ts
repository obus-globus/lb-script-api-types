import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PacketWrapper extends Object{
    apply(arg0: Direction, arg1: State, arg2: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>[]): void;
    cancel(): void;
    clearInputBuffer(): void;
    clearPacket(): void;
    consumeReadsOnly(arg0: () => void): void;
    create(arg0: PacketType): PacketWrapper;
    create(arg0: PacketType, arg1: (param0: PacketWrapper) => void): PacketWrapper;
    create(arg0: number): PacketWrapper;
    create(arg0: number, arg1: (param0: PacketWrapper) => void): PacketWrapper;
    get<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: number): T;
    getId(): number;
    getPacketType(): PacketType;
    is(arg0: Type<Object>, arg1: number): boolean;
    isCancelled(): boolean;
    isReadable(arg0: Type<Object>, arg1: number): boolean;
    passthrough<T extends Object | number | string | boolean>(arg0: Type<T>): T;
    passthroughAll(): void;
    passthroughAndMap<T extends Object | number | string | boolean>(arg0: Type<Object>, arg1: Type<T>): T;
    read<T extends Object | number | string | boolean>(arg0: Type<T>): T;
    resetReader(): void;
    rewindReader(arg0: number): void;
    scheduleSend(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSend(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    scheduleSendRaw(): void;
    scheduleSendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    scheduleSendToServerRaw(): void;
    send(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    send(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    sendFuture(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): ChannelFuture;
    sendFutureRaw(): ChannelFuture;
    sendRaw(): void;
    sendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    sendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    sendToServerRaw(): void;
    set<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: number, arg2: T): void;
    setCancelled(arg0: boolean): void;
    setId(arg0: number): void;
    setPacketType(arg0: PacketType): void;
    user(): UserConnection;
    write<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: T): void;
    writeToBuffer(arg0: ByteBuf): void;
}