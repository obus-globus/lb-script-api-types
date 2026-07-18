import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ConfigValueType extends Enum<ConfigValueType> {
    static BOOLEAN: ConfigValueType;
    static LIST: ConfigValueType;
    static NULL: ConfigValueType;
    static NUMBER: ConfigValueType;
    static OBJECT: ConfigValueType;
    static STRING: ConfigValueType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ConfigValueType;
    static values(): ConfigValueType[];
    private constructor()
    name(): "OBJECT" | "LIST" | "NUMBER" | "BOOLEAN" | "NULL" | "STRING";
}