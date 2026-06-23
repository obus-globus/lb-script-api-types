import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { LevelRenderState } from '../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface LevelRendererAccessor extends Object{
    getDestructionProgress(): { [key: string]: any };
    getEntityRenderDispatcher(): EntityRenderDispatcher;
    getLevel(): ClientLevel;
    getLevelRenderState(): LevelRenderState;
    getRenderBuffers(): RenderBuffers;
    invokeCullTerrain(arg0: Camera, arg1: Frustum, arg2: boolean): void;
    invokeExtractBlockEntities(arg0: Camera, arg1: number, arg2: LevelRenderState): void;
    setRenderBuffers(arg0: RenderBuffers): void;
}