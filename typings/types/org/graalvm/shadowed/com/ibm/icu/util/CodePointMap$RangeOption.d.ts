import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CodePointMap$RangeOption extends Enum<CodePointMap$RangeOption> {
    static FIXED_ALL_SURROGATES: CodePointMap$RangeOption;
    static FIXED_LEAD_SURROGATES: CodePointMap$RangeOption;
    static NORMAL: CodePointMap$RangeOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CodePointMap$RangeOption;
    static values(): CodePointMap$RangeOption[];
    private constructor()
    name(): "NORMAL" | "FIXED_LEAD_SURROGATES" | "FIXED_ALL_SURROGATES";
}