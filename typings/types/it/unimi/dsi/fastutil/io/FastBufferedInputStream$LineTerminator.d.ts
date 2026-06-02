import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FastBufferedInputStream$LineTerminator extends Enum<FastBufferedInputStream$LineTerminator> {
    static CR: FastBufferedInputStream$LineTerminator;
    static CR_LF: FastBufferedInputStream$LineTerminator;
    static LF: FastBufferedInputStream$LineTerminator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FastBufferedInputStream$LineTerminator;
    static values(): (Object | null)[];
    private constructor()
    name(): "CR" | "LF" | "CR_LF";
}