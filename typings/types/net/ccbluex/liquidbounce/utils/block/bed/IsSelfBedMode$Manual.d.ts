import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { IsSelfBedMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
export class IsSelfBedMode$Manual extends IsSelfBedMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private trackKey: InputConstants$Key;
    // private /*not mapped: */ getTrackKey(): InputConstants$Key;
    // private trackedPos: BlockPos$MutableBlockPos;
    // private untrackKey: InputConstants$Key;
    // private /*not mapped: */ getUntrackKey(): InputConstants$Key;
    // private worldHandler: EventHook<WorldChangeEvent>;
    disable(): void;
    isSelfBed(block: BedBlock, pos: BlockPos): boolean;
}