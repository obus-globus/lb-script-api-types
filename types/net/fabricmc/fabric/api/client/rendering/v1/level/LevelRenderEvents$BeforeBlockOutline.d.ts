import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderContext.d.ts'
import type { BlockOutlineRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/BlockOutlineRenderState.d.ts'
export interface LevelRenderEvents$BeforeBlockOutline extends Object{
    beforeBlockOutline(arg0: LevelRenderContext, arg1: BlockOutlineRenderState): boolean;
}