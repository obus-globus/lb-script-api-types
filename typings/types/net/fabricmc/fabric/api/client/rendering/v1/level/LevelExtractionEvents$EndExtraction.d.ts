import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelExtractionContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionContext.d.ts'
export interface LevelExtractionEvents$EndExtraction extends Object{
    endExtraction(arg0: LevelExtractionContext): void;
}