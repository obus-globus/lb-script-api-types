import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { AmbientOcclusionMode } from '../../../../../../net/caffeinemc/mods/sodium/client/render/model/AmbientOcclusionMode.d.ts'
import type { PlatformBlockAccess } from '../../../../../../net/caffeinemc/mods/sodium/client/services/PlatformBlockAccess.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FabricBlockAccess extends Object implements PlatformBlockAccess {
    static INSTANCE: PlatformBlockAccess;
    constructor()
    getLightEmission(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos): number;
    getNormalVectorShade(arg0: ModelQuadView, arg1: BlockAndTintGetter, arg2: boolean): number;
    // private getShade(arg0: BlockAndTintGetter, arg1: Direction, arg2: boolean): number;
    // private normalShade(arg0: BlockAndTintGetter, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
    platformHasBlockData(): boolean;
    shouldBlockEntityGlow(arg0: BlockEntity, arg1: LocalPlayer): boolean;
    shouldOccludeFluid(arg0: Direction, arg1: BlockState, arg2: FluidState): boolean;
    shouldShowFluidOverlay(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos, arg3: FluidState): boolean;
    shouldSkipRender(arg0: BlockGetter, arg1: BlockState, arg2: BlockState, arg3: BlockPos, arg4: BlockPos, arg5: Direction): boolean;
    usesAmbientOcclusion(arg0: BlockStateModelPart, arg1: BlockState, arg2: ChunkSectionLayer, arg3: BlockAndTintGetter, arg4: BlockPos): AmbientOcclusionMode;
}