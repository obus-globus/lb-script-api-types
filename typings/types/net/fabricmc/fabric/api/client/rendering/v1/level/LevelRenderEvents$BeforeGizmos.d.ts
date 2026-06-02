import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderContext.d.ts'
export interface LevelRenderEvents$BeforeGizmos extends Object{
    beforeGizmos(arg0: LevelRenderContext): void;
}