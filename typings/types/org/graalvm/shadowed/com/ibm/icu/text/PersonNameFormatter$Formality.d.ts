import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Formality extends Enum<PersonNameFormatter$Formality> {
    static DEFAULT: PersonNameFormatter$Formality;
    static FORMAL: PersonNameFormatter$Formality;
    static INFORMAL: PersonNameFormatter$Formality;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PersonNameFormatter$Formality;
    static values(): (Object | null)[];
    private constructor()
    name(): "FORMAL" | "INFORMAL" | "DEFAULT";
}