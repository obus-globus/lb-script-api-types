import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Length extends Enum<PersonNameFormatter$Length> {
    static DEFAULT: PersonNameFormatter$Length;
    static LONG: PersonNameFormatter$Length;
    static MEDIUM: PersonNameFormatter$Length;
    static SHORT: PersonNameFormatter$Length;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PersonNameFormatter$Length;
    static values(): (Object | null)[];
    private constructor()
    name(): "LONG" | "MEDIUM" | "SHORT" | "DEFAULT";
}