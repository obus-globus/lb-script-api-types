import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Length extends Enum<PersonNameFormatter$Length> {
    static DEFAULT: PersonNameFormatter$Length;
    static LONG: PersonNameFormatter$Length;
    static MEDIUM: PersonNameFormatter$Length;
    static SHORT: PersonNameFormatter$Length;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PersonNameFormatter$Length;
    static values(): PersonNameFormatter$Length[];
    private constructor()
    name(): "LONG" | "MEDIUM" | "SHORT" | "DEFAULT";
}