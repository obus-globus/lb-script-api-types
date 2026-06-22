import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractLevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/AbstractLevelRenderContext.d.ts'
import type { GameRenderer } from '../../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { ChunkSectionsToRender } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionsToRender.d.ts'
import type { LevelRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface LevelTerrainRenderContext extends Object, AbstractLevelRenderContext{
    gameRenderer(): GameRenderer;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
    sectionsToRender(): ChunkSectionsToRender;
}