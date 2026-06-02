import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { GameEvent } from '../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEvent$ListenerInfo } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$ListenerInfo.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameEventDispatcher extends Object {
    constructor(level: ServerLevel)
    // private level: ServerLevel;
    // private handleGameEventMessagesInQueue(listenerInfos: GameEvent$ListenerInfo[]): void;
    post(gameEvent: Holder<GameEvent>, position: Vec3, context: GameEvent$Context): void;
}