import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLifecycleEvents$ClientStarted } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents$ClientStarted.d.ts'
import type { ClientLifecycleEvents$ClientStopping } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents$ClientStopping.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
export class ClientLifecycleEvents extends Object {
    static CLIENT_STARTED: Event<(param0: Minecraft) => void>;
    static CLIENT_STOPPING: Event<(param0: Minecraft) => void>;
    private constructor()
}