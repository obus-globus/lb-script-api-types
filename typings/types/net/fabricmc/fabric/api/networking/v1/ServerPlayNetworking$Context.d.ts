import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerPlayNetworking$Context extends Object{
    packetContext(): PacketContext;
    player(): ServerPlayer;
    responseSender(): PacketSender;
    server(): MinecraftServer;
}