import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { CharDirectionality$Companion } from '../../kotlin/text/CharDirectionality$Companion.d.ts'
export class CharDirectionality extends Enum<CharDirectionality> implements Serializable {
    static ARABIC_NUMBER: CharDirectionality;
    static BOUNDARY_NEUTRAL: CharDirectionality;
    static COMMON_NUMBER_SEPARATOR: CharDirectionality;
    static Companion: CharDirectionality$Companion;
    static EUROPEAN_NUMBER: CharDirectionality;
    static EUROPEAN_NUMBER_SEPARATOR: CharDirectionality;
    static EUROPEAN_NUMBER_TERMINATOR: CharDirectionality;
    static LEFT_TO_RIGHT: CharDirectionality;
    static LEFT_TO_RIGHT_EMBEDDING: CharDirectionality;
    static LEFT_TO_RIGHT_OVERRIDE: CharDirectionality;
    static NONSPACING_MARK: CharDirectionality;
    static OTHER_NEUTRALS: CharDirectionality;
    static PARAGRAPH_SEPARATOR: CharDirectionality;
    static POP_DIRECTIONAL_FORMAT: CharDirectionality;
    static RIGHT_TO_LEFT: CharDirectionality;
    static RIGHT_TO_LEFT_ARABIC: CharDirectionality;
    static RIGHT_TO_LEFT_EMBEDDING: CharDirectionality;
    static RIGHT_TO_LEFT_OVERRIDE: CharDirectionality;
    static SEGMENT_SEPARATOR: CharDirectionality;
    static UNDEFINED: CharDirectionality;
    static WHITESPACE: CharDirectionality;
    static getEntries(): CharDirectionality[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CharDirectionality;
    static values(): (Object | null)[];
    private constructor(value: number)
    readonly value: number;
    name(): "UNDEFINED" | "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT" | "RIGHT_TO_LEFT_ARABIC" | "EUROPEAN_NUMBER" | "EUROPEAN_NUMBER_SEPARATOR" | "EUROPEAN_NUMBER_TERMINATOR" | "ARABIC_NUMBER" | "COMMON_NUMBER_SEPARATOR" | "NONSPACING_MARK" | "BOUNDARY_NEUTRAL" | "PARAGRAPH_SEPARATOR" | "SEGMENT_SEPARATOR" | "WHITESPACE" | "OTHER_NEUTRALS" | "LEFT_TO_RIGHT_EMBEDDING" | "LEFT_TO_RIGHT_OVERRIDE" | "RIGHT_TO_LEFT_EMBEDDING" | "RIGHT_TO_LEFT_OVERRIDE" | "POP_DIRECTIONAL_FORMAT";
}