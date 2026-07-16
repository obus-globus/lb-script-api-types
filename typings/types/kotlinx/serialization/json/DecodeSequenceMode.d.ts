import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DecodeSequenceMode extends Enum<DecodeSequenceMode> {
    static ARRAY_WRAPPED: DecodeSequenceMode;
    static AUTO_DETECT: DecodeSequenceMode;
    static WHITESPACE_SEPARATED: DecodeSequenceMode;
    static getEntries(): DecodeSequenceMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DecodeSequenceMode;
    static values(): DecodeSequenceMode[];
    private constructor()
    name(): "WHITESPACE_SEPARATED" | "ARRAY_WRAPPED" | "AUTO_DETECT";
}