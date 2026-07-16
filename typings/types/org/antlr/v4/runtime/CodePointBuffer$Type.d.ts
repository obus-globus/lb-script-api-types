import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CodePointBuffer$Type extends Enum<CodePointBuffer$Type> {
    static BYTE: CodePointBuffer$Type;
    static CHAR: CodePointBuffer$Type;
    static INT: CodePointBuffer$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodePointBuffer$Type;
    static values(): CodePointBuffer$Type[];
    private constructor()
    name(): "BYTE" | "CHAR" | "INT";
}