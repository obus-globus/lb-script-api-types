import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevelEvents$AfterClientLevelChange } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLevelEvents$AfterClientLevelChange.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class ClientLevelEvents extends Object {
    static AFTER_CLIENT_LEVEL_CHANGE: Event<(param0: Minecraft, param1: ClientLevel) => void>;
    private constructor()
}