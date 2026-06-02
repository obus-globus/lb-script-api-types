import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DataType$Format extends Enum<DataType$Format> {
    static BOOLEAN: DataType$Format;
    static FLOATING: DataType$Format;
    static INT: DataType$Format;
    static STRING: DataType$Format;
    static UINT: DataType$Format;
    static UNKNOWN: DataType$Format;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DataType$Format;
    static values(): (Object | null)[];
    private constructor()
    name(): "FLOATING" | "UINT" | "INT" | "BOOLEAN" | "STRING" | "UNKNOWN";
}