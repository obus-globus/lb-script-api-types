import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { IsSelfBedMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
import type { Vector3d } from '../../../../../../org/joml/Vector3d.d.ts'
export class IsSelfBedMode$SpawnLocation extends IsSelfBedMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private bedDistance: number;
    // private /*not mapped: */ getBedDistance(): number;
    // private gameStartHandler: EventHook<PacketEvent>;
    // private trackedSpawnLocation: Vector3d;
    disable(): void;
    isSelfBed(block: BedBlock, pos: BlockPos): boolean;
}