import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class JavaTypeFlexibility extends Enum<JavaTypeFlexibility> {
    static FLEXIBLE_LOWER_BOUND: JavaTypeFlexibility;
    static FLEXIBLE_UPPER_BOUND: JavaTypeFlexibility;
    static INFLEXIBLE: JavaTypeFlexibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JavaTypeFlexibility;
    static values(): JavaTypeFlexibility[];
    private constructor()
    name(): "INFLEXIBLE" | "FLEXIBLE_UPPER_BOUND" | "FLEXIBLE_LOWER_BOUND";
}