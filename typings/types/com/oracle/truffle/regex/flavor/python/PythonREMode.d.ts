import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PythonREMode extends Enum<PythonREMode> {
    static Bytes: PythonREMode;
    static Str: PythonREMode;
    static fromEncoding(paramencoding: Encodings$Encoding): PythonREMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PythonREMode;
    static values(): PythonREMode[];
    private constructor()
    name(): "Str" | "Bytes";
}