import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BytesTrie$Result extends Enum<BytesTrie$Result> {
    static FINAL_VALUE: BytesTrie$Result;
    static INTERMEDIATE_VALUE: BytesTrie$Result;
    static NO_MATCH: BytesTrie$Result;
    static NO_VALUE: BytesTrie$Result;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BytesTrie$Result;
    static values(): BytesTrie$Result[];
    private constructor()
    hasNext(): boolean;
    hasValue(): boolean;
    matches(): boolean;
    name(): "NO_MATCH" | "NO_VALUE" | "FINAL_VALUE" | "INTERMEDIATE_VALUE";
}