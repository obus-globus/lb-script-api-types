import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$Context.d.ts'
import type { ServerPlayNetworking$PlayPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$PlayPayloadHandler.d.ts'
import type { AbstractChanneledNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/AbstractChanneledNetworkAddon.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export class ServerPlayNetworkAddon extends AbstractChanneledNetworkAddon<(param0: Object, param1: Object | null) => void> {
    constructor(arg0: ServerGamePacketListenerImpl, arg1: Connection, arg2: MinecraftServer)
    // private context: ServerPlayNetworking$Context;
    // private listener: ServerGamePacketListenerImpl;
    // private requestedReconfigure: boolean;
    // private sentInitialRegisterPacket: boolean;
    // private server: MinecraftServer;
    createPacket(arg0: CustomPacketPayload): Packet<Object>;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    invokeRegisterEvent(arg0: Identifier[]): void;
    invokeUnregisterEvent(arg0: Identifier[]): void;
    isOnReceiveThread(): boolean;
    isReservedChannel(arg0: Identifier): boolean;
    onClientReady(): void;
    receive(arg0: (param0: Object | null, param1: ServerPlayNetworking$Context) => void, arg1: CustomPacketPayload): void;
    reconfigure(): void;
    requestedReconfigure(): boolean;
    schedule(arg0: () => void): void;
}