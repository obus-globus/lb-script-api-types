import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerLevelEvents$Load } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLevelEvents$Load.d.ts'
import type { ServerLevelEvents$Unload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerLevelEvents$Unload.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class ServerLevelEvents extends Object {
    static LOAD: Event<(param0: MinecraftServer, param1: ServerLevel) => void>;
    static UNLOAD: Event<(param0: MinecraftServer, param1: ServerLevel) => void>;
    private constructor()
}