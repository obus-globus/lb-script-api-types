import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class GameModeChangeEvent extends Event implements WebSocketEvent {
    constructor(gameMode: GameType)
    readonly gameMode: GameType;
}