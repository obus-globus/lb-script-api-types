import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassSetContents$Kind extends Enum<ClassSetContents$Kind> {
    static Character: ClassSetContents$Kind;
    static Class: ClassSetContents$Kind;
    static POSIXCollationElement: ClassSetContents$Kind;
    static POSIXCollationEquivalenceClass: ClassSetContents$Kind;
    static Range: ClassSetContents$Kind;
    static Strings: ClassSetContents$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClassSetContents$Kind;
    static values(): ClassSetContents$Kind[];
    private constructor()
    name(): "Character" | "Class" | "Strings" | "Range" | "POSIXCollationElement" | "POSIXCollationEquivalenceClass";
}