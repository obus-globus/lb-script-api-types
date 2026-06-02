import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLoginConnectionEvents$Disconnect } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents$Disconnect.d.ts'
import type { ClientLoginConnectionEvents$Init } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents$Init.d.ts'
import type { ClientLoginConnectionEvents$QueryStart } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents$QueryStart.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
export class ClientLoginConnectionEvents extends Object {
    static DISCONNECT: Event<(param0: ClientHandshakePacketListenerImpl, param1: Minecraft) => void>;
    static INIT: Event<(param0: ClientHandshakePacketListenerImpl, param1: Minecraft) => void>;
    static QUERY_START: Event<(param0: ClientHandshakePacketListenerImpl, param1: Minecraft) => void>;
    private constructor()
}