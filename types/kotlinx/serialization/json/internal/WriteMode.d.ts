import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WriteMode extends Enum<WriteMode> {
    static LIST: WriteMode;
    static MAP: WriteMode;
    static OBJ: WriteMode;
    static POLY_OBJ: WriteMode;
    static getEntries(): WriteMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WriteMode;
    static values(): (Object | null)[];
    private constructor(begin: string, end: string)
    begin: string;
    end: string;
    name(): "OBJ" | "LIST" | "MAP" | "POLY_OBJ";
}