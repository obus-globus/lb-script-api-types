import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PluralRules$PluralType extends Enum<PluralRules$PluralType> {
    static CARDINAL: PluralRules$PluralType;
    static ORDINAL: PluralRules$PluralType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PluralRules$PluralType;
    static values(): PluralRules$PluralType[];
    private constructor()
    name(): "CARDINAL" | "ORDINAL";
}