import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CodecPolicy extends Enum<CodecPolicy> {
    static LENIENT: CodecPolicy;
    static STRICT: CodecPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CodecPolicy;
    static values(): CodecPolicy[];
    private constructor()
    name(): "STRICT" | "LENIENT";
}