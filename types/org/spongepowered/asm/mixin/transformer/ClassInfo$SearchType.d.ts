import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassInfo$SearchType extends Enum<ClassInfo$SearchType> {
    static ALL_CLASSES: ClassInfo$SearchType;
    static SUPER_CLASSES_ONLY: ClassInfo$SearchType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassInfo$SearchType;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL_CLASSES" | "SUPER_CLASSES_ONLY";
}