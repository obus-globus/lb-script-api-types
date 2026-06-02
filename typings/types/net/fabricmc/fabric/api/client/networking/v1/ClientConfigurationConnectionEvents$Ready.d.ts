import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
export interface ClientConfigurationConnectionEvents$Ready extends Object{
    onConfigurationReady(arg0: ClientConfigurationPacketListenerImpl, arg1: Minecraft): void;
}