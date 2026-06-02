import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockMappingData$LevelEventMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$LevelEventMapping.d.ts'
import type { LevelEvent } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/LevelEvent.d.ts'
export class BedrockMappingData$JavaLevelEvent extends Record implements BedrockMappingData$LevelEventMapping {
    constructor(levelEvent: LevelEvent, data: number)
    // private data: number;
    // private levelEvent: LevelEvent;
    data(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    levelEvent(): LevelEvent;
    toString(): string;
}