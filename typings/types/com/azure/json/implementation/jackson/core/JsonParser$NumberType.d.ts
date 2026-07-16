import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonParser$NumberType extends Enum<JsonParser$NumberType> {
    static BIG_DECIMAL: JsonParser$NumberType;
    static BIG_INTEGER: JsonParser$NumberType;
    static DOUBLE: JsonParser$NumberType;
    static FLOAT: JsonParser$NumberType;
    static INT: JsonParser$NumberType;
    static LONG: JsonParser$NumberType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JsonParser$NumberType;
    static values(): JsonParser$NumberType[];
    private constructor()
    name(): "INT" | "LONG" | "BIG_INTEGER" | "FLOAT" | "DOUBLE" | "BIG_DECIMAL";
}