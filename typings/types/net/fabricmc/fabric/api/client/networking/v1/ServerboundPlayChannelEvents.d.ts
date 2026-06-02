import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerboundPlayChannelEvents$Register } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ServerboundPlayChannelEvents$Register.d.ts'
import type { ServerboundPlayChannelEvents$Unregister } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ServerboundPlayChannelEvents$Unregister.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientPacketListener } from '../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundPlayChannelEvents extends Object {
    static REGISTER: Event<(param0: ClientPacketListener, param1: PacketSender, param2: Minecraft, param3: Identifier[]) => void>;
    static UNREGISTER: Event<(param0: ClientPacketListener, param1: PacketSender, param2: Minecraft, param3: Identifier[]) => void>;
    private constructor()
}