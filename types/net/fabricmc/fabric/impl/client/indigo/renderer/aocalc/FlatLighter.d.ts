import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/MutableQuadViewImpl.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/QuadViewImpl.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockModelLighter$Cache } from '../../../../../../../../net/minecraft/client/renderer/block/BlockModelLighter$Cache.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { CardinalLighting } from '../../../../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FlatLighter extends Object {
    constructor(arg0: BlockModelLighter$Cache)
    // private lightCache: BlockModelLighter$Cache;
    // private scratchPos: BlockPos$MutableBlockPos;
    applyDirectionalBrightness(arg0: CardinalLighting, arg1: MutableQuadViewImpl, arg2: boolean): void;
    light(arg0: BlockAndTintGetter, arg1: BlockState, arg2: BlockPos, arg3: QuadViewImpl): number;
}