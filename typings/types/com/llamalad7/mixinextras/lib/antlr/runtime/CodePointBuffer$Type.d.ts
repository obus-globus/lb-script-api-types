import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CodePointBuffer$Type extends Enum<CodePointBuffer$Type> {
    static BYTE: CodePointBuffer$Type;
    static CHAR: CodePointBuffer$Type;
    static INT: CodePointBuffer$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static values(): CodePointBuffer$Type[];
    private constructor()
    name(): "BYTE" | "CHAR" | "INT";
}