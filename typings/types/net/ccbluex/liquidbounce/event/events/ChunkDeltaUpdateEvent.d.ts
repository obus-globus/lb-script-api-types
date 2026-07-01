import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientboundSectionBlocksUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSectionBlocksUpdatePacket.d.ts'
/**
 * Fires when multiple blocks in a chunk section change at once (a batched section-blocks-update packet).
 */
export class ChunkDeltaUpdateEvent extends Event {
    constructor(packet: ClientboundSectionBlocksUpdatePacket)
    readonly packet: ClientboundSectionBlocksUpdatePacket;
}