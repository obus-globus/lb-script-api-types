import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HuffmanState extends Enum<HuffmanState> {
    static DYNAMIC_CODES: HuffmanState;
    static FIXED_CODES: HuffmanState;
    static INITIAL: HuffmanState;
    static STORED: HuffmanState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HuffmanState;
    static values(): HuffmanState[];
    private constructor()
    name(): "INITIAL" | "STORED" | "DYNAMIC_CODES" | "FIXED_CODES";
}