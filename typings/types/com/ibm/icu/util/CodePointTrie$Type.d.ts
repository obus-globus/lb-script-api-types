import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CodePointTrie$Type extends Enum<CodePointTrie$Type> {
    static FAST: CodePointTrie$Type;
    static SMALL: CodePointTrie$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodePointTrie$Type;
    static values(): CodePointTrie$Type[];
    private constructor()
    name(): "FAST" | "SMALL";
}