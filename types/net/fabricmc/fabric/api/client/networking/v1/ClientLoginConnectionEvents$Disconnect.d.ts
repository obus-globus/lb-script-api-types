import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
export interface ClientLoginConnectionEvents$Disconnect extends Object{
    onLoginDisconnect(arg0: ClientHandshakePacketListenerImpl, arg1: Minecraft): void;
}