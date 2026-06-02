import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StandardLineSeparator extends Enum<StandardLineSeparator> {
    static CR: StandardLineSeparator;
    static CRLF: StandardLineSeparator;
    static LF: StandardLineSeparator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StandardLineSeparator;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private lineSeparator: string;
    getBytes(arg0: Charset): number[];
    getString(): string;
    name(): "CR" | "CRLF" | "LF";
}