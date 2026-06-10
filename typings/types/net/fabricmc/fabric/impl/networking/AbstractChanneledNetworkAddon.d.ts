import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { AbstractNetworkAddon } from '../../../../../net/fabricmc/fabric/impl/networking/AbstractNetworkAddon.d.ts'
import type { ChannelInfoHolder } from '../../../../../net/fabricmc/fabric/impl/networking/ChannelInfoHolder.d.ts'
import type { CommonPacketHandler } from '../../../../../net/fabricmc/fabric/impl/networking/CommonPacketHandler.d.ts'
import type { CommonRegisterPayload } from '../../../../../net/fabricmc/fabric/impl/networking/CommonRegisterPayload.d.ts'
import type { GlobalReceiverRegistry } from '../../../../../net/fabricmc/fabric/impl/networking/GlobalReceiverRegistry.d.ts'
import type { RegistrationPayload } from '../../../../../net/fabricmc/fabric/impl/networking/RegistrationPayload.d.ts'
import type { Connection } from '../../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class AbstractChanneledNetworkAddon<H extends Object | number | string | boolean> extends AbstractNetworkAddon<H> implements PacketSender, CommonPacketHandler {
    constructor(arg0: GlobalReceiverRegistry<H>, arg1: Connection, arg2: string)
    // private commonVersion: number;
    // private connection: Connection;
    // private receiver: GlobalReceiverRegistry<H>;
    readonly sendableChannels: Identifier[];
    createRegisterPayload(): CommonRegisterPayload;
    createRegistrationPayload(arg0: CustomPacketPayload$Type<RegistrationPayload>, arg1: Identifier[]): RegistrationPayload;
    disconnect(arg0: Component): void;
    getNegotiatedVersion(): number;
    // private getProtocol(): string;
    getSendableChannels(): Identifier[];
    handle(arg0: CustomPacketPayload): boolean;
    invokeRegisterEvent(arg0: Identifier[]): void;
    invokeUnregisterEvent(arg0: Identifier[]): void;
    isOnReceiveThread(): boolean;
    onCommonRegisterPacket(arg0: CommonRegisterPayload): void;
    onCommonVersionPacket(arg0: number): void;
    receive(arg0: H, arg1: CustomPacketPayload): void;
    receiveRegistration(arg0: boolean, arg1: RegistrationPayload): void;
    register(arg0: Identifier[]): void;
    // private registerChannel(arg0: Identifier): void;
    registerChannel(arg0: Identifier, arg1: H): boolean;
    registerPendingChannels(arg0: ChannelInfoHolder, arg1: ConnectionProtocol): void;
    schedule(arg0: () => void): void;
    sendInitialChannelRegistrationPacket(): void;
    sendPacket(arg0: Packet<Object>): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
    sendPacket(arg0: Packet<Object>, arg1: ChannelFutureListener): void;
    unregister(arg0: Identifier[]): void;
}