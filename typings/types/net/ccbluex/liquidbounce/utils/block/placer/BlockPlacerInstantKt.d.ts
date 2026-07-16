import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
export class BlockPlacerInstantKt extends Object {
    static placeInstantOnBlockUpdate(self: BlockPlacer, event: PacketEvent): void;
}