import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelTerrainRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelTerrainRenderContext.d.ts'
export interface LevelRenderEvents$AfterOpaqueTerrain extends Object{
    afterOpaqueTerrain(arg0: LevelTerrainRenderContext): void;
}