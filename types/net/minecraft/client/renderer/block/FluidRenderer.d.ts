import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidRenderer$Output } from '../../../../../net/minecraft/client/renderer/block/FluidRenderer$Output.d.ts'
import type { FluidStateModelSet } from '../../../../../net/minecraft/client/renderer/block/FluidStateModelSet.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FluidRenderer extends Object {
    static shouldRenderFace(paramfluidState: FluidState, paramblockState: BlockState, paramdirection: Direction, paramneighborFluidState: FluidState): boolean;
    constructor(fluidModels: FluidStateModelSet)
    fluidModels: FluidStateModelSet;
    // private addFace(builder: VertexConsumer, x0: number, y0: number, z0: number, u0: number, v0: number, x1: number, y1: number, z1: number, u1: number, v1: number, x2: number, y2: number, z2: number, u2: number, v2: number, x3: number, y3: number, z3: number, u3: number, v3: number, color: number, lightCoords: number, addBackFace: boolean): void;
    // private addWeightedHeight(weightedHeight: number[], height: number): void;
    // private calculateAverageHeight(level: BlockAndTintGetter, type: Fluid, heightSelf: number, height2: number, height1: number, cornerPos: BlockPos): number;
    // private getHeight(level: BlockAndTintGetter, fluidType: Fluid, pos: BlockPos): number;
    // private getHeight(level: BlockAndTintGetter, fluidType: Fluid, pos: BlockPos, state: BlockState, fluidState: FluidState): number;
    // private getLightCoords(level: BlockAndTintGetter, pos: BlockPos): number;
    tesselate(level: BlockAndTintGetter, pos: BlockPos, output: (param0: ChunkSectionLayer) => com.mojang.blaze3d.vertex.VertexConsumer, blockState: BlockState, fluidState: FluidState): void;
    // private vertex(builder: VertexConsumer, x: number, y: number, z: number, color: number, u: number, v: number, lightCoords: number): void;
}