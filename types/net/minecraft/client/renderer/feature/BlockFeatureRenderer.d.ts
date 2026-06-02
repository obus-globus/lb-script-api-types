import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { BlockStateModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { OptionsRenderState } from '../../../../../net/minecraft/client/renderer/state/OptionsRenderState.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class BlockFeatureRenderer extends Object {
    constructor()
    // private parts: BlockStateModelPart[];
    // private quadInstance: QuadInstance;
    // private random: RandomSource;
    // private renderBlockModelSubmits(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, translucent: boolean): void;
    // private renderBreakingBlockModelSubmits(arg0: SubmitNodeCollection, arg1: MultiBufferSource$BufferSource): void;
    // private renderMovingBlockSubmits(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, blockStateModelSet: BlockStateModelSet, optionsState: OptionsRenderState, translucent: boolean): void;
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, blockStateModelSet: BlockStateModelSet, outlineBufferSource: OutlineBufferSource, optionsState: OptionsRenderState): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, blockStateModelSet: BlockStateModelSet, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource, optionsState: OptionsRenderState): void;
}