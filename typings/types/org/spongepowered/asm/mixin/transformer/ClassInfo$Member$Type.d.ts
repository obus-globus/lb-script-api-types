import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassInfo$Member$Type extends Enum<ClassInfo$Member$Type> {
    static FIELD: ClassInfo$Member$Type;
    static METHOD: ClassInfo$Member$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassInfo$Member$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "METHOD" | "FIELD";
}