import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ProtocolInfo } from '../../../../com/viaversion/viaversion/api/connection/ProtocolInfo.d.ts'
import type { ProtocolStorables } from '../../../../com/viaversion/viaversion/api/connection/ProtocolStorables.d.ts'
import type { StorableObject } from '../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTracker } from '../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { ItemHasher } from '../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { ClientWorld } from '../../../../com/viaversion/viaversion/api/minecraft/ClientWorld.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketTracker } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketTracker.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketWrapperImpl } from '../../../../com/viaversion/viaversion/protocol/packet/PacketWrapperImpl.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { CodecException } from '../../../../io/netty/handler/codec/CodecException.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SplittableRandom } from '../../../../java/util/SplittableRandom.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class UserConnectionImpl extends Object implements UserConnection {
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: boolean)
    readonly active: boolean;
    readonly channel: Channel;
    readonly clientSide: boolean;
    readonly id: number;
    readonly packetTracker: PacketTracker;
    // private passthroughTokens: (Object | null)[];
    readonly pendingDisconnect: boolean;
    readonly protocolInfo: ProtocolInfo;
    // private protocolStorables: ProtocolStorables[];
    // private random: SplittableRandom;
    readonly storedObjects: JavaMap<Class<Object>, StorableObject>;
    addClientWorld(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: ClientWorld): void;
    addEntityTracker(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: EntityTracker): void;
    addItemHasher(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: ItemHasher): void;
    checkClientboundPacket(): boolean;
    checkIncomingPacket(): boolean;
    checkIncomingPacket(arg0: number): boolean;
    checkOutgoingPacket(): boolean;
    checkServerboundPacket(): boolean;
    checkServerboundPacket(arg0: number): boolean;
    clearStoredObjects(): void;
    disconnect(arg0: string): void;
    equals(arg0: Object | null): boolean;
    // private fireChannelRead(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    generatePassthroughToken(): number;
    get<T extends StorableObject>(arg0: Class<T>): T;
    getChannel(): Channel;
    getClientWorld<T extends ClientWorld>(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): T;
    getEntityTracker<T extends EntityTracker>(arg0: Protocol<any, any, any, any>): T;
    getEntityTracker<T extends EntityTracker>(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): T;
    getEntityTrackers(): EntityTracker[];
    getId(): number;
    getItemHasher<T extends ItemHasher>(arg0: Protocol<any, any, any, any>): T;
    getItemHasher<T extends ItemHasher>(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): T;
    getPacketTracker(): PacketTracker;
    getProtocolInfo(): ProtocolInfo;
    getStoredObjects(): JavaMap<Class<Object>, StorableObject>;
    has(arg0: Class<StorableObject>): boolean;
    hashCode(): number;
    isActive(): boolean;
    isClientSide(): boolean;
    isPendingDisconnect(): boolean;
    isServerSide(): boolean;
    put(arg0: StorableObject): void;
    remove<T extends StorableObject>(arg0: Class<T>): T;
    // private removePassthroughToken(arg0: number): boolean;
    scheduleSendRawPacket(arg0: ByteBuf): void;
    scheduleSendRawPacketToServer(arg0: ByteBuf): void;
    sendRawPacket(arg0: ByteBuf): void;
    // private sendRawPacket(arg0: ByteBuf, arg1: boolean): void;
    sendRawPacketFuture(arg0: ByteBuf): ChannelFuture;
    // private sendRawPacketNow(arg0: ByteBuf): void;
    sendRawPacketToServer(arg0: ByteBuf): void;
    // private sendRawPacketToServerClientSide(arg0: ByteBuf, arg1: boolean): void;
    // private sendRawPacketToServerServerSide(arg0: ByteBuf, arg1: boolean): void;
    setActive(arg0: boolean): void;
    setPendingDisconnect(arg0: boolean): void;
    shouldApplyBlockProtocol(): boolean;
    shouldTransformPacket(): boolean;
    storables<T extends ProtocolStorables>(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): T;
    storables<T extends ProtocolStorables>(arg0: Protocol<any, any, any, any>): T;
    // private storablesByClassIfPresent(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): ProtocolStorables;
    storablesIfPresent<T extends ProtocolStorables>(arg0: Protocol<any, any, any, any>): T;
    // private transform(arg0: ByteBuf, arg1: Direction, arg2: (param0: Throwable) => CodecException): void;
    transformClientbound(arg0: ByteBuf, arg1: (param0: Throwable) => CodecException): void;
    transformIncoming(arg0: ByteBuf, arg1: (param0: Throwable) => CodecException): void;
    transformOutgoing(arg0: ByteBuf, arg1: (param0: Throwable) => CodecException): void;
    transformServerbound(arg0: ByteBuf, arg1: (param0: Throwable) => CodecException): void;
    // private writeAndFlush(arg0: ByteBuf): void;
    // private writeToBuffer(arg0: PacketWrapperImpl, arg1: ByteBuf, arg2: number, arg3: number): void;
}