import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LevelExtractionContext } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionContext.d.ts'
import type { Camera } from '../../../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { GameRenderer } from '../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { LevelRenderState } from '../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export class LevelExtractionContextImpl extends Object implements LevelExtractionContext {
    constructor()
    // private camera: Camera;
    // private deltaTracker: DeltaTracker;
    // private gameRenderer: GameRenderer;
    // private level: ClientLevel;
    // private levelRenderState: LevelRenderState;
    // private levelRenderer: LevelRenderer;
    camera(): Camera;
    deltaTracker(): DeltaTracker;
    gameRenderer(): GameRenderer;
    level(): ClientLevel;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
    prepare(arg0: GameRenderer, arg1: LevelRenderer, arg2: LevelRenderState, arg3: ClientLevel, arg4: DeltaTracker, arg5: Camera): void;
}