import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerTickEvents$EndLevelTick } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents$EndLevelTick.d.ts'
import type { ServerTickEvents$EndTick } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents$EndTick.d.ts'
import type { ServerTickEvents$StartLevelTick } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents$StartLevelTick.d.ts'
import type { ServerTickEvents$StartTick } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents$StartTick.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class ServerTickEvents extends Object {
    static END_LEVEL_TICK: Event<(param0: ServerLevel) => void>;
    static END_SERVER_TICK: Event<(param0: MinecraftServer) => void>;
    static START_LEVEL_TICK: Event<(param0: ServerLevel) => void>;
    static START_SERVER_TICK: Event<(param0: MinecraftServer) => void>;
    private constructor()
}