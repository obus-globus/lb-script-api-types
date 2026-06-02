import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JsonConfiguration$ErrorType extends Enum<JsonConfiguration$ErrorType> {
    static CLASS_NOT_FOUND: JsonConfiguration$ErrorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JsonConfiguration$ErrorType;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLASS_NOT_FOUND";
}