import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NukerArea } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/nuker/area/NukerArea.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FloorNukerArea extends NukerArea {
    static Companion: Tagged$Companion;
    static INSTANCE: FloorNukerArea;
    // private endPosition: Vec3i;
    // private /*not mapped: */ getEndPosition(): Vec3i;
    // private relativeToPlayer: boolean;
    // private /*not mapped: */ getRelativeToPlayer(): boolean;
    // private startPosition: Vec3i;
    // private /*not mapped: */ getStartPosition(): Vec3i;
    // private topToBottom: boolean;
    // private /*not mapped: */ getTopToBottom(): boolean;
    lookupTargets(radius: number, count: number | null): Pair<BlockPos, BlockState>[];
}