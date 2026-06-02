import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractLevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/AbstractLevelRenderContext.d.ts'
import type { ChunkSectionsToRender } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionsToRender.d.ts'
export interface LevelTerrainRenderContext extends Object, AbstractLevelRenderContext{
    sectionsToRender(): ChunkSectionsToRender;
}