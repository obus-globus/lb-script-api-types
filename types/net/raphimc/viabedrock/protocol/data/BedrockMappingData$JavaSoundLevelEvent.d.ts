import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockMappingData$JavaLevelEvent } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaLevelEvent.d.ts'
import type { BedrockMappingData$JavaSound } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaSound.d.ts'
import type { BedrockMappingData$LevelEventMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$LevelEventMapping.d.ts'
export class BedrockMappingData$JavaSoundLevelEvent extends Record implements BedrockMappingData$LevelEventMapping {
    constructor(sound: BedrockMappingData$JavaSound, levelEvent: BedrockMappingData$JavaLevelEvent)
    // private levelEvent: BedrockMappingData$JavaLevelEvent;
    // private sound: BedrockMappingData$JavaSound;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    levelEvent(): BedrockMappingData$JavaLevelEvent;
    sound(): BedrockMappingData$JavaSound;
    toString(): string;
}