import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenericColorMode } from '../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MapColorMode extends GenericColorMode<Pair<BlockPos, BlockState>> {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>, alpha: number)
    // private alpha: number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    getColor(param: Pair<BlockPos, BlockState>): Color4b;
}