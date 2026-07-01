import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { PlayerData } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerData.d.ts'
/**
 * Fires when the current combat target changes, exposing the new target (null when cleared).
 */
export class TargetChangeEvent extends Event implements WebSocketEvent {
    constructor(target: PlayerData | null)
    readonly target: PlayerData | null;
}