import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientPlayConnectionEvents$Disconnect } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents$Disconnect.d.ts'
import type { ClientPlayConnectionEvents$Init } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents$Init.d.ts'
import type { ClientPlayConnectionEvents$Join } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents$Join.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientPacketListener } from '../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
export class ClientPlayConnectionEvents extends Object {
    static DISCONNECT: Event<(param0: ClientPacketListener, param1: Minecraft) => void>;
    static INIT: Event<(param0: ClientPacketListener, param1: Minecraft) => void>;
    static JOIN: Event<(param0: ClientPacketListener, param1: PacketSender, param2: Minecraft) => void>;
    private constructor()
}