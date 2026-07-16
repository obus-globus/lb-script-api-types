import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$Formality extends Enum<PersonNameFormatter$Formality> {
    static DEFAULT: PersonNameFormatter$Formality;
    static FORMAL: PersonNameFormatter$Formality;
    static INFORMAL: PersonNameFormatter$Formality;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PersonNameFormatter$Formality;
    static values(): PersonNameFormatter$Formality[];
    private constructor()
    name(): "FORMAL" | "INFORMAL" | "DEFAULT";
}