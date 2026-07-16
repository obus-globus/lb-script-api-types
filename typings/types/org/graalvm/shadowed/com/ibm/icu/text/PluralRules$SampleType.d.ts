import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PluralRules$SampleType extends Enum<PluralRules$SampleType> {
    static DECIMAL: PluralRules$SampleType;
    static INTEGER: PluralRules$SampleType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PluralRules$SampleType;
    static values(): PluralRules$SampleType[];
    private constructor()
    name(): "INTEGER" | "DECIMAL";
}