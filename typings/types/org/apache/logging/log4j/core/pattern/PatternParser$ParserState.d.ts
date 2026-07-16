import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PatternParser$ParserState extends Enum<PatternParser$ParserState> {
    static CONVERTER_STATE: PatternParser$ParserState;
    static DOT_STATE: PatternParser$ParserState;
    static LITERAL_STATE: PatternParser$ParserState;
    static MAX_STATE: PatternParser$ParserState;
    static MIN_STATE: PatternParser$ParserState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PatternParser$ParserState;
    static values(): PatternParser$ParserState[];
    private constructor()
    name(): "LITERAL_STATE" | "CONVERTER_STATE" | "DOT_STATE" | "MIN_STATE" | "MAX_STATE";
}