import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientboundSectionBlocksUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSectionBlocksUpdatePacket.d.ts'
export class ChunkDeltaUpdateEvent extends Event {
    constructor(packet: ClientboundSectionBlocksUpdatePacket)
    readonly packet: ClientboundSectionBlocksUpdatePacket;
}