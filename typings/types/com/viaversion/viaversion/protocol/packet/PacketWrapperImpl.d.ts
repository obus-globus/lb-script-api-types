import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { InformativeException } from '../../../../../com/viaversion/viaversion/exception/InformativeException.d.ts'
import type { PacketWrapperImpl$PacketValue } from '../../../../../com/viaversion/viaversion/protocol/packet/PacketWrapperImpl$PacketValue.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PacketWrapperImpl extends Object implements PacketWrapper {
    static PASSTHROUGH_ID: number;
    static create(paramarg0: PacketType, paramarg1: UserConnection): PacketWrapper;
    static create(paramarg0: PacketType, paramarg1: ByteBuf, paramarg2: UserConnection): PacketWrapper;
    static create(paramarg0: number, paramarg1: ByteBuf, paramarg2: UserConnection): PacketWrapper;
    constructor(arg0: PacketType, arg1: ByteBuf, arg2: UserConnection)
    constructor(arg0: number, arg1: ByteBuf, arg2: UserConnection)
    readonly allActionsRead: boolean;
    readonly id: number;
    readonly inputBuffer: ByteBuf;
    readonly packetType: PacketType;
    // private packetValues: PacketWrapperImpl$PacketValue<Object>[];
    // private readableObjects: PacketWrapperImpl$PacketValue<Object>[];
    // private send: boolean;
    // private userConnection: UserConnection;
    // private addPacketValue(arg0: PacketWrapperImpl$PacketValue<Object>): void;
    // private allocateOutputBuffer(): ByteBuf;
    apply(arg0: Direction, arg1: State, arg2: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>[]): void;
    areStoredPacketValuesEmpty(): boolean;
    // private attemptTransform<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: Object): T;
    cancel(): void;
    // private cancelledFuture(): ChannelFuture;
    clearInputBuffer(): void;
    clearPacket(): void;
    // private constructPacket(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean, arg2: Direction): ByteBuf;
    consumeReadsOnly(arg0: () => void): void;
    create(arg0: PacketType): PacketWrapperImpl;
    create(arg0: PacketType, arg1: (param0: PacketWrapper) => void): PacketWrapperImpl;
    create(arg0: number): PacketWrapperImpl;
    create(arg0: number, arg1: (param0: PacketWrapper) => void): PacketWrapperImpl;
    // private createInformativeException(arg0: Exception, arg1: Type<Object>, arg2: number): InformativeException;
    get<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: number): T;
    getId(): number;
    getInputBuffer(): ByteBuf;
    getPacketType(): PacketType;
    is(arg0: Type<Object>, arg1: number): boolean;
    isCancelled(): boolean;
    isReadable(arg0: Type<Object>, arg1: number): boolean;
    passthrough<T extends Object | number | string | boolean>(arg0: Type<T>): T;
    passthroughAll(): void;
    passthroughAndMap<T extends Object | number | string | boolean>(arg0: Type<Object>, arg1: Type<T>): T;
    // private pollReadableObject(arg0: Type<T>): PacketWrapperImpl$PacketValue<T>;
    read<T extends Object | number | string | boolean>(arg0: Type<T>): T;
    // private readFromBuffer<T extends Object | number | string | boolean>(arg0: Type<T>): T;
    resetReader(): void;
    rewindReader(arg0: number): void;
    scheduleSend(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSend(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSend(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    scheduleSendRaw(): void;
    scheduleSendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    scheduleSendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    scheduleSendToServerRaw(): void;
    send(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    send(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    send(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    // private send0(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean, arg2: boolean): void;
    sendFuture(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): ChannelFuture;
    sendFutureRaw(): ChannelFuture;
    // private sendNow(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    sendRaw(): void;
    // private sendRaw(arg0: boolean): void;
    sendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    sendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    sendToServer(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean): void;
    // private sendToServer0(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: boolean, arg2: boolean): void;
    sendToServerRaw(): void;
    // private sendToServerRaw(arg0: boolean): void;
    set<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: number, arg2: T): void;
    setAllActionsRead(arg0: boolean): void;
    setCancelled(arg0: boolean): void;
    setId(arg0: number): void;
    setPacketType(arg0: PacketType): void;
    toString(): string;
    user(): UserConnection;
    write<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: T): void;
    writeProcessedValues(arg0: ByteBuf): void;
    writeToBuffer(arg0: ByteBuf): void;
}