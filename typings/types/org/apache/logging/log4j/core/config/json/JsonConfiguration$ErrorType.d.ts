import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JsonConfiguration$ErrorType extends Enum<JsonConfiguration$ErrorType> {
    static CLASS_NOT_FOUND: JsonConfiguration$ErrorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JsonConfiguration$ErrorType;
    static values(): JsonConfiguration$ErrorType[];
    private constructor()
    name(): "CLASS_NOT_FOUND";
}