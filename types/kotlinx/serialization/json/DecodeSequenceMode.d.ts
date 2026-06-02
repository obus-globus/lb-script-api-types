import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DecodeSequenceMode extends Enum<DecodeSequenceMode> {
    static ARRAY_WRAPPED: DecodeSequenceMode;
    static AUTO_DETECT: DecodeSequenceMode;
    static WHITESPACE_SEPARATED: DecodeSequenceMode;
    static getEntries(): DecodeSequenceMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DecodeSequenceMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "WHITESPACE_SEPARATED" | "ARRAY_WRAPPED" | "AUTO_DETECT";
}