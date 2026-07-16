import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CodePointTrie$ValueWidth extends Enum<CodePointTrie$ValueWidth> {
    static BITS_16: CodePointTrie$ValueWidth;
    static BITS_32: CodePointTrie$ValueWidth;
    static BITS_8: CodePointTrie$ValueWidth;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodePointTrie$ValueWidth;
    static values(): CodePointTrie$ValueWidth[];
    private constructor()
    name(): "BITS_16" | "BITS_32" | "BITS_8";
}