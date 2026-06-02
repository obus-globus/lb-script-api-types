import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationConnectionEvents$Complete } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents$Complete.d.ts'
import type { ClientConfigurationConnectionEvents$Disconnect } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents$Disconnect.d.ts'
import type { ClientConfigurationConnectionEvents$Init } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents$Init.d.ts'
import type { ClientConfigurationConnectionEvents$Ready } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents$Ready.d.ts'
import type { ClientConfigurationConnectionEvents$Start } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents$Start.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
export class ClientConfigurationConnectionEvents extends Object {
    static COMPLETE: Event<(param0: ClientConfigurationPacketListenerImpl, param1: Minecraft) => void>;
    static DISCONNECT: Event<(param0: ClientConfigurationPacketListenerImpl, param1: Minecraft) => void>;
    static INIT: Event<(param0: ClientConfigurationPacketListenerImpl, param1: Minecraft) => void>;
    static READY: Event<(param0: ClientConfigurationPacketListenerImpl, param1: Minecraft) => void>;
    static START: Event<(param0: ClientConfigurationPacketListenerImpl, param1: Minecraft) => void>;
    private constructor()
}