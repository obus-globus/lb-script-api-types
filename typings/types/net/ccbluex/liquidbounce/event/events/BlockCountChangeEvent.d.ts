import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Fires when the tracked block count changes, exposing the block and the new count.
 */
export class BlockCountChangeEvent extends Event implements WebSocketEvent {
    constructor(nextBlock: Block | null, count: number | null)
    readonly count: number | null;
    readonly nextBlock: Block | null;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}