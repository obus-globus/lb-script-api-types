import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassSetContents$Kind extends Enum<ClassSetContents$Kind> {
    static Character: ClassSetContents$Kind;
    static Class: ClassSetContents$Kind;
    static POSIXCollationElement: ClassSetContents$Kind;
    static POSIXCollationEquivalenceClass: ClassSetContents$Kind;
    static Range: ClassSetContents$Kind;
    static Strings: ClassSetContents$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClassSetContents$Kind;
    static values(): ClassSetContents$Kind[];
    private constructor()
    name(): "Character" | "Class" | "Strings" | "Range" | "POSIXCollationElement" | "POSIXCollationEquivalenceClass";
}