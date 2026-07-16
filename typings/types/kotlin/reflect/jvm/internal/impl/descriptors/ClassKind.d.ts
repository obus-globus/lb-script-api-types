import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClassKind extends Enum<ClassKind> {
    static ANNOTATION_CLASS: ClassKind;
    static CLASS: ClassKind;
    static ENUM_CLASS: ClassKind;
    static ENUM_ENTRY: ClassKind;
    static INTERFACE: ClassKind;
    static OBJECT: ClassKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassKind;
    static values(): ClassKind[];
    private constructor(arg2: string)
    // private codeRepresentation: string;
    isSingleton(): boolean;
    name(): "CLASS" | "INTERFACE" | "ENUM_CLASS" | "ENUM_ENTRY" | "ANNOTATION_CLASS" | "OBJECT";
}