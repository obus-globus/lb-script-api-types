import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassInfo$Member$Type extends Enum<ClassInfo$Member$Type> {
    static FIELD: ClassInfo$Member$Type;
    static METHOD: ClassInfo$Member$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClassInfo$Member$Type;
    static values(): ClassInfo$Member$Type[];
    private constructor()
    name(): "METHOD" | "FIELD";
}