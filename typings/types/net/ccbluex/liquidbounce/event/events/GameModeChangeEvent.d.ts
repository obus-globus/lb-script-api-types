import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
/**
 * Fires when the player's game mode changes, exposing the new game mode.
 */
export class GameModeChangeEvent extends Event implements WebSocketEvent {
    constructor(gameMode: GameType)
    readonly gameMode: GameType;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}