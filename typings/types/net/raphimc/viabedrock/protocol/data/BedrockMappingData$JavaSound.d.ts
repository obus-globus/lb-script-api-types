import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockMappingData$LevelEventMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$LevelEventMapping.d.ts'
import type { SoundSource } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/generated/SoundSource.d.ts'
export class BedrockMappingData$JavaSound extends Record implements BedrockMappingData$LevelEventMapping {
    // private category: SoundSource;
    // private id: number;
    // private identifier: string;
    category(): SoundSource;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    identifier(): string;
    toString(): string;
}