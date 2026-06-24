import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { LevelRenderState } from '../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface LevelRendererAccessor extends Object{
    getEntityRenderDispatcher(): EntityRenderDispatcher;
    getLevelRenderState(): LevelRenderState;
    getRenderBuffers(): RenderBuffers;
    setRenderBuffers(arg0: RenderBuffers): void;
}