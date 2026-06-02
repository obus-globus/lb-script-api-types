import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { FlagImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class ClassKind extends Enum<ClassKind> {
    static ANNOTATION_CLASS: ClassKind;
    static CLASS: ClassKind;
    static COMPANION_OBJECT: ClassKind;
    static ENUM_CLASS: ClassKind;
    static ENUM_ENTRY: ClassKind;
    static INTERFACE: ClassKind;
    static OBJECT: ClassKind;
    static getEntries(): ClassKind[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassKind;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private flag: FlagImpl;
    getFlag$kotlin_metadata(): FlagImpl;
    name(): "CLASS" | "INTERFACE" | "ENUM_CLASS" | "ENUM_ENTRY" | "ANNOTATION_CLASS" | "OBJECT" | "COMPANION_OBJECT";
}