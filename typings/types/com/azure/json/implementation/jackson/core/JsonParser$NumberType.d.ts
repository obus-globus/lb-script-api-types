import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonParser$NumberType extends Enum<JsonParser$NumberType> {
    static BIG_DECIMAL: JsonParser$NumberType;
    static BIG_INTEGER: JsonParser$NumberType;
    static DOUBLE: JsonParser$NumberType;
    static FLOAT: JsonParser$NumberType;
    static INT: JsonParser$NumberType;
    static LONG: JsonParser$NumberType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonParser$NumberType;
    static values(): (Object | null)[];
    private constructor()
    name(): "INT" | "LONG" | "BIG_INTEGER" | "FLOAT" | "DOUBLE" | "BIG_DECIMAL";
}