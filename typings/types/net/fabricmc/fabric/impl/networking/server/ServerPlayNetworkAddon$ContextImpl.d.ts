import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$Context.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export class ServerPlayNetworkAddon$ContextImpl extends Record implements ServerPlayNetworking$Context {
    private constructor(server: MinecraftServer, listener: ServerGamePacketListenerImpl, responseSender: PacketSender)
    // private listener: ServerGamePacketListenerImpl;
    // private responseSender: PacketSender;
    // private server: MinecraftServer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    listener(): ServerGamePacketListenerImpl;
    packetContext(): PacketContext;
    player(): ServerPlayer;
    responseSender(): PacketSender;
    server(): MinecraftServer;
    toString(): string;
}