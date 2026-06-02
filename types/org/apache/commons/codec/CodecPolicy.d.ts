import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CodecPolicy extends Enum<CodecPolicy> {
    static LENIENT: CodecPolicy;
    static STRICT: CodecPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodecPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "STRICT" | "LENIENT";
}