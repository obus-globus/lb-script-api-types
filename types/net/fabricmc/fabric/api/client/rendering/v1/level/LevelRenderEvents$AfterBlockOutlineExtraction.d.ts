import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelExtractionContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionContext.d.ts'
import type { HitResult } from '../../../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export interface LevelRenderEvents$AfterBlockOutlineExtraction extends Object{
    afterBlockOutlineExtraction(arg0: LevelExtractionContext, arg1: HitResult): void;
}