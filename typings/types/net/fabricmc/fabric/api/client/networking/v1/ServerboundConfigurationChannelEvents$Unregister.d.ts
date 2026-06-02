import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ServerboundConfigurationChannelEvents$Unregister extends Object{
    onChannelUnregister(arg0: ClientConfigurationPacketListenerImpl, arg1: PacketSender, arg2: Minecraft, arg3: Identifier[]): void;
}