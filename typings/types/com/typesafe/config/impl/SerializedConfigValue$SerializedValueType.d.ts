import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SerializedConfigValue$SerializedValueType extends Enum<SerializedConfigValue$SerializedValueType> {
    static BOOLEAN: SerializedConfigValue$SerializedValueType;
    static DOUBLE: SerializedConfigValue$SerializedValueType;
    static INT: SerializedConfigValue$SerializedValueType;
    static LIST: SerializedConfigValue$SerializedValueType;
    static LONG: SerializedConfigValue$SerializedValueType;
    static NULL: SerializedConfigValue$SerializedValueType;
    static OBJECT: SerializedConfigValue$SerializedValueType;
    static STRING: SerializedConfigValue$SerializedValueType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SerializedConfigValue$SerializedValueType;
    static values(): SerializedConfigValue$SerializedValueType[];
    private constructor(arg2: ConfigValueType)
    // private configType: ConfigValueType;
    name(): "NULL" | "BOOLEAN" | "INT" | "LONG" | "DOUBLE" | "STRING" | "LIST" | "OBJECT";
}