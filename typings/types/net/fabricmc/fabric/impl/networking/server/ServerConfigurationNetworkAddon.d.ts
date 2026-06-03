import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerConfigurationNetworking$ConfigurationPacketHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$ConfigurationPacketHandler.d.ts'
import type { ServerConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$Context.d.ts'
import type { AbstractChanneledNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/AbstractChanneledNetworkAddon.d.ts'
import type { ChannelInfoHolder } from '../../../../../../net/fabricmc/fabric/impl/networking/ChannelInfoHolder.d.ts'
import type { RegistrationPayload } from '../../../../../../net/fabricmc/fabric/impl/networking/RegistrationPayload.d.ts'
import type { ServerConfigurationNetworkAddon$RegisterState } from '../../../../../../net/fabricmc/fabric/impl/networking/server/ServerConfigurationNetworkAddon$RegisterState.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class ServerConfigurationNetworkAddon extends AbstractChanneledNetworkAddon<(param0: Object, param1: Object | null) => void> {
    constructor(arg0: ServerConfigurationPacketListenerImpl, arg1: MinecraftServer)
    readonly clientBrand: string;
    // private context: ServerConfigurationNetworking$Context;
    // private isReconfiguring: boolean;
    // private listener: ServerConfigurationPacketListenerImpl;
    // private registerState: ServerConfigurationNetworkAddon$RegisterState;
    // private server: MinecraftServer;
    configuration(): void;
    createPacket(arg0: CustomPacketPayload): Packet<Object>;
    getChannelInfoHolder(): ChannelInfoHolder;
    getClientBrand(): string;
    handle(arg0: CustomPacketPayload): boolean;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    invokeRegisterEvent(arg0: Identifier[]): void;
    invokeUnregisterEvent(arg0: Identifier[]): void;
    isOnReceiveThread(): boolean;
    isReconfiguring(): boolean;
    isReservedChannel(arg0: Identifier): boolean;
    onPong(arg0: number): void;
    preConfiguration(): void;
    receive(arg0: (param0: Object | null, param1: ServerConfigurationNetworking$Context) => void, arg1: CustomPacketPayload): void;
    receiveRegistration(arg0: boolean, arg1: RegistrationPayload): void;
    schedule(arg0: () => void): void;
    sendPacket(arg0: Packet<Object>): void;
    sendPacket(arg0: Packet<Object>, arg1: ChannelFutureListener): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
    setReconfiguring(): void;
    startConfiguration(): boolean;
}