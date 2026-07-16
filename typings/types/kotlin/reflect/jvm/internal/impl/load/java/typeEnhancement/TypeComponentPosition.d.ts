import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TypeComponentPosition extends Enum<TypeComponentPosition> {
    static FLEXIBLE_LOWER: TypeComponentPosition;
    static FLEXIBLE_UPPER: TypeComponentPosition;
    static INFLEXIBLE: TypeComponentPosition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeComponentPosition;
    static values(): TypeComponentPosition[];
    private constructor()
    name(): "FLEXIBLE_LOWER" | "FLEXIBLE_UPPER" | "INFLEXIBLE";
}