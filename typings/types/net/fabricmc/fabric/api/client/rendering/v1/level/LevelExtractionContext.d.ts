import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractLevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/AbstractLevelRenderContext.d.ts'
import type { Camera } from '../../../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { GameRenderer } from '../../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { LevelRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface LevelExtractionContext extends Object, AbstractLevelRenderContext{
    camera(): Camera;
    deltaTracker(): DeltaTracker;
    gameRenderer(): GameRenderer;
    level(): ClientLevel;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
}