import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConstDirectiveParser$Type extends Enum<ConstDirectiveParser$Type> {
    static BOOL: ConstDirectiveParser$Type;
    static FLOAT: ConstDirectiveParser$Type;
    static INT: ConstDirectiveParser$Type;
    static IVEC3: ConstDirectiveParser$Type;
    static VEC2: ConstDirectiveParser$Type;
    static VEC4: ConstDirectiveParser$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ConstDirectiveParser$Type;
    static values(): ConstDirectiveParser$Type[];
    private constructor()
    name(): "INT" | "FLOAT" | "VEC2" | "IVEC3" | "VEC4" | "BOOL";
}