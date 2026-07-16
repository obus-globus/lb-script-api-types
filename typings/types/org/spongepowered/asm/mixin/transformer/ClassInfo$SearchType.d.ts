import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassInfo$SearchType extends Enum<ClassInfo$SearchType> {
    static ALL_CLASSES: ClassInfo$SearchType;
    static SUPER_CLASSES_ONLY: ClassInfo$SearchType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClassInfo$SearchType;
    static values(): ClassInfo$SearchType[];
    private constructor()
    name(): "ALL_CLASSES" | "SUPER_CLASSES_ONLY";
}