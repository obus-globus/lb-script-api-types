import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberSkeletonImpl$ParseState extends Enum<NumberSkeletonImpl$ParseState> {
    static STATE_CURRENCY_UNIT: NumberSkeletonImpl$ParseState;
    static STATE_FRACTION_PRECISION: NumberSkeletonImpl$ParseState;
    static STATE_IDENTIFIER_UNIT: NumberSkeletonImpl$ParseState;
    static STATE_INCREMENT_PRECISION: NumberSkeletonImpl$ParseState;
    static STATE_INTEGER_WIDTH: NumberSkeletonImpl$ParseState;
    static STATE_MEASURE_UNIT: NumberSkeletonImpl$ParseState;
    static STATE_NULL: NumberSkeletonImpl$ParseState;
    static STATE_NUMBERING_SYSTEM: NumberSkeletonImpl$ParseState;
    static STATE_PER_MEASURE_UNIT: NumberSkeletonImpl$ParseState;
    static STATE_PRECISION: NumberSkeletonImpl$ParseState;
    static STATE_SCALE: NumberSkeletonImpl$ParseState;
    static STATE_SCIENTIFIC: NumberSkeletonImpl$ParseState;
    static STATE_UNIT_USAGE: NumberSkeletonImpl$ParseState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberSkeletonImpl$ParseState;
    static values(): NumberSkeletonImpl$ParseState[];
    private constructor()
    name(): "STATE_NULL" | "STATE_SCIENTIFIC" | "STATE_FRACTION_PRECISION" | "STATE_PRECISION" | "STATE_INCREMENT_PRECISION" | "STATE_MEASURE_UNIT" | "STATE_PER_MEASURE_UNIT" | "STATE_IDENTIFIER_UNIT" | "STATE_UNIT_USAGE" | "STATE_CURRENCY_UNIT" | "STATE_INTEGER_WIDTH" | "STATE_NUMBERING_SYSTEM" | "STATE_SCALE";
}