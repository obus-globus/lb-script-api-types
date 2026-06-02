import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientTickEvents$EndLevelTick } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents$EndLevelTick.d.ts'
import type { ClientTickEvents$EndTick } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents$EndTick.d.ts'
import type { ClientTickEvents$StartLevelTick } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents$StartLevelTick.d.ts'
import type { ClientTickEvents$StartTick } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents$StartTick.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class ClientTickEvents extends Object {
    static END_CLIENT_TICK: Event<(param0: Minecraft) => void>;
    static END_LEVEL_TICK: Event<(param0: ClientLevel) => void>;
    static START_CLIENT_TICK: Event<(param0: Minecraft) => void>;
    static START_LEVEL_TICK: Event<(param0: ClientLevel) => void>;
    private constructor()
}