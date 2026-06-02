import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NukerArea } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/nuker/area/NukerArea.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SphereNukerArea extends NukerArea {
    static Companion: Tagged$Companion;
    static INSTANCE: SphereNukerArea;
    lookupTargets(radius: number, count: number | null): Pair<BlockPos, BlockState>[];
}