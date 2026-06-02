import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientPacketListener } from '../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ServerboundPlayChannelEvents$Register extends Object{
    onChannelRegister(arg0: ClientPacketListener, arg1: PacketSender, arg2: Minecraft, arg3: Identifier[]): void;
}