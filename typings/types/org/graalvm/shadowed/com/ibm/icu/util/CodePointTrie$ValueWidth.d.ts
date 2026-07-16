import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CodePointTrie$ValueWidth extends Enum<CodePointTrie$ValueWidth> {
    static BITS_16: CodePointTrie$ValueWidth;
    static BITS_32: CodePointTrie$ValueWidth;
    static BITS_8: CodePointTrie$ValueWidth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CodePointTrie$ValueWidth;
    static values(): CodePointTrie$ValueWidth[];
    private constructor()
    name(): "BITS_16" | "BITS_32" | "BITS_8";
}