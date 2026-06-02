import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { PacketContext } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { LocalPlayer } from '../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export interface ClientPlayNetworking$Context extends Object{
    client(): Minecraft;
    packetContext(): PacketContext;
    player(): LocalPlayer;
    responseSender(): PacketSender;
}