import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractLevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/AbstractLevelRenderContext.d.ts'
import type { Camera } from '../../../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export interface LevelExtractionContext extends Object, AbstractLevelRenderContext{
    camera(): Camera;
    deltaTracker(): DeltaTracker;
    level(): ClientLevel;
}