import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PluralRules$PluralType extends Enum<PluralRules$PluralType> {
    static CARDINAL: PluralRules$PluralType;
    static ORDINAL: PluralRules$PluralType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PluralRules$PluralType;
    static values(): PluralRules$PluralType[];
    private constructor()
    name(): "CARDINAL" | "ORDINAL";
}