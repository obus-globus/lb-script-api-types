import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockStateModel } from '../../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class BlockRenderContext extends Object {
    constructor(arg0: LevelSlice, arg1: TranslucentGeometryCollector)
    collector: TranslucentGeometryCollector;
    // private model: BlockStateModel;
    // private origin: Vector3f;
    // private pos: BlockPos$MutableBlockPos;
    // private seed: number;
    // private slice: LevelSlice;
    // private state: BlockState;
    collector(): TranslucentGeometryCollector;
    model(): BlockStateModel;
    origin(): Vector3fc;
    pos(): BlockPos;
    seed(): number;
    slice(): LevelSlice;
    state(): BlockState;
    update(arg0: BlockPos, arg1: BlockPos, arg2: BlockState, arg3: BlockStateModel, arg4: number): void;
}