import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClassUtils$Interfaces extends Enum<ClassUtils$Interfaces> {
    static EXCLUDE: ClassUtils$Interfaces;
    static INCLUDE: ClassUtils$Interfaces;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClassUtils$Interfaces;
    static values(): ClassUtils$Interfaces[];
    private constructor()
    name(): "INCLUDE" | "EXCLUDE";
}