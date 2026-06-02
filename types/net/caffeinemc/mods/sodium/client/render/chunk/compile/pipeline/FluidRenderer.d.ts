import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkBuildBuffers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildBuffers.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export abstract class FluidRenderer extends Object {
    constructor()
    render(arg0: LevelSlice, arg1: BlockState, arg2: FluidState, arg3: BlockPos, arg4: BlockPos, arg5: TranslucentGeometryCollector, arg6: ChunkBuildBuffers): void;
}