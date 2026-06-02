import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GameRenderer } from '../../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { LevelRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface AbstractLevelRenderContext extends Object{
    gameRenderer(): GameRenderer;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
}