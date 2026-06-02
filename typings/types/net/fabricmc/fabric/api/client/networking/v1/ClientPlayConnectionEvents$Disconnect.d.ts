import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientPacketListener } from '../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
export interface ClientPlayConnectionEvents$Disconnect extends Object{
    onPlayDisconnect(arg0: ClientPacketListener, arg1: Minecraft): void;
}