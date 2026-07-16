import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Usage extends Enum<PersonNameFormatter$Usage> {
    static ADDRESSING: PersonNameFormatter$Usage;
    static MONOGRAM: PersonNameFormatter$Usage;
    static REFERRING: PersonNameFormatter$Usage;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PersonNameFormatter$Usage;
    static values(): PersonNameFormatter$Usage[];
    private constructor()
    name(): "ADDRESSING" | "REFERRING" | "MONOGRAM";
}