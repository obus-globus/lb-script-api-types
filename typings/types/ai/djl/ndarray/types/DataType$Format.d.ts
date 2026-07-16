import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DataType$Format extends Enum<DataType$Format> {
    static BOOLEAN: DataType$Format;
    static FLOATING: DataType$Format;
    static INT: DataType$Format;
    static STRING: DataType$Format;
    static UINT: DataType$Format;
    static UNKNOWN: DataType$Format;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DataType$Format;
    static values(): DataType$Format[];
    private constructor()
    name(): "FLOATING" | "UINT" | "INT" | "BOOLEAN" | "STRING" | "UNKNOWN";
}