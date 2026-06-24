import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelExtractionContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionContext.d.ts'
import type { LevelExtractionEvents$AfterBlockOutlineExtraction } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionEvents$AfterBlockOutlineExtraction.d.ts'
import type { LevelExtractionEvents$EndExtraction } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionEvents$EndExtraction.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { HitResult } from '../../../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export class LevelExtractionEvents extends Object {
    static AFTER_BLOCK_OUTLINE_EXTRACTION: Event<(param0: LevelExtractionContext, param1: HitResult) => void>;
    static END_EXTRACTION: Event<(param0: LevelExtractionContext) => void>;
    constructor()
}