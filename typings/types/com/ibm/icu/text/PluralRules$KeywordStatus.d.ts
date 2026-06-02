import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PluralRules$KeywordStatus extends Enum<PluralRules$KeywordStatus> {
    static BOUNDED: PluralRules$KeywordStatus;
    static INVALID: PluralRules$KeywordStatus;
    static SUPPRESSED: PluralRules$KeywordStatus;
    static UNBOUNDED: PluralRules$KeywordStatus;
    static UNIQUE: PluralRules$KeywordStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PluralRules$KeywordStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "INVALID" | "SUPPRESSED" | "UNIQUE" | "BOUNDED" | "UNBOUNDED";
}