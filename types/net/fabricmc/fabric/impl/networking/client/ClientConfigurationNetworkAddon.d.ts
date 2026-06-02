import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$ConfigurationPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$ConfigurationPayloadHandler.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { ChannelInfoHolder } from '../../../../../../net/fabricmc/fabric/impl/networking/ChannelInfoHolder.d.ts'
import type { RegistrationPayload } from '../../../../../../net/fabricmc/fabric/impl/networking/RegistrationPayload.d.ts'
import type { ClientCommonNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientCommonNetworkAddon.d.ts'
import type { ClientConfigurationNetworkAddon$ContextImpl } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientConfigurationNetworkAddon$ContextImpl.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientConfigurationNetworkAddon extends ClientCommonNetworkAddon<(param0: Object, param1: Object | null) => void, ClientConfigurationPacketListenerImpl> {
    constructor(arg0: ClientConfigurationPacketListenerImpl, arg1: Minecraft)
    // private context: ClientConfigurationNetworkAddon$ContextImpl;
    // private hasStarted: boolean;
    // private sentInitialRegisterPacket: boolean;
    createPacket(arg0: CustomPacketPayload): Packet<Object>;
    getChannelInfoHolder(): ChannelInfoHolder;
    handle(arg0: CustomPacketPayload): boolean;
    handleComplete(): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    invokeRegisterEvent(arg0: Identifier[]): void;
    // private invokeStartEvent(): void;
    invokeUnregisterEvent(arg0: Identifier[]): void;
    isOnReceiveThread(): boolean;
    onServerReady(): void;
    receive(arg0: (param0: Object | null, param1: ClientConfigurationNetworking$Context) => void, arg1: CustomPacketPayload): void;
    receiveRegistration(arg0: boolean, arg1: RegistrationPayload): void;
}