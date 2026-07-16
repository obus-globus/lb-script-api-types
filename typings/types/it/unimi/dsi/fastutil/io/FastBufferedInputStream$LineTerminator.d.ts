import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FastBufferedInputStream$LineTerminator extends Enum<FastBufferedInputStream$LineTerminator> {
    static CR: FastBufferedInputStream$LineTerminator;
    static CR_LF: FastBufferedInputStream$LineTerminator;
    static LF: FastBufferedInputStream$LineTerminator;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FastBufferedInputStream$LineTerminator;
    static values(): FastBufferedInputStream$LineTerminator[];
    private constructor()
    name(): "CR" | "LF" | "CR_LF";
}