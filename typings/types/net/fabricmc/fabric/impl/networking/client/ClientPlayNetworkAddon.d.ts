import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context.d.ts'
import type { ClientPlayNetworking$PlayPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler.d.ts'
import type { ClientCommonNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientCommonNetworkAddon.d.ts'
import type { ClientPlayNetworkAddon$ContextImpl } from '../../../../../../net/fabricmc/fabric/impl/networking/client/ClientPlayNetworkAddon$ContextImpl.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientPlayNetworkAddon extends ClientCommonNetworkAddon<(param0: Object, param1: ClientPlayNetworking$Context) => void, ClientPacketListener> {
    constructor(arg0: ClientPacketListener, arg1: Minecraft)
    // private context: ClientPlayNetworkAddon$ContextImpl;
    createPacket(arg0: CustomPacketPayload): Packet<any>;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    invokeRegisterEvent(arg0: Identifier[]): void;
    invokeUnregisterEvent(arg0: Identifier[]): void;
    isOnReceiveThread(): boolean;
    onServerReady(): void;
    receive(arg0: (param0: CustomPacketPayload | null, param1: ClientPlayNetworking$Context) => void, arg1: CustomPacketPayload): void;
}