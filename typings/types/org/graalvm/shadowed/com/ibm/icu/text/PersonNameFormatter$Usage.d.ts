import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Usage extends Enum<PersonNameFormatter$Usage> {
    static ADDRESSING: PersonNameFormatter$Usage;
    static MONOGRAM: PersonNameFormatter$Usage;
    static REFERRING: PersonNameFormatter$Usage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PersonNameFormatter$Usage;
    static values(): PersonNameFormatter$Usage[];
    private constructor()
    name(): "ADDRESSING" | "REFERRING" | "MONOGRAM";
}