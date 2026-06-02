import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TypeComponentPosition extends Enum<TypeComponentPosition> {
    static FLEXIBLE_LOWER: TypeComponentPosition;
    static FLEXIBLE_UPPER: TypeComponentPosition;
    static INFLEXIBLE: TypeComponentPosition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeComponentPosition;
    static values(): (Object | null)[];
    private constructor()
    name(): "FLEXIBLE_LOWER" | "FLEXIBLE_UPPER" | "INFLEXIBLE";
}