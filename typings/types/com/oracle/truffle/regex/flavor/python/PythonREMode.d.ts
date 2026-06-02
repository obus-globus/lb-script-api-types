import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PythonREMode extends Enum<PythonREMode> {
    static Bytes: PythonREMode;
    static Str: PythonREMode;
    static fromEncoding(paramencoding: Encodings$Encoding): PythonREMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PythonREMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "Str" | "Bytes";
}