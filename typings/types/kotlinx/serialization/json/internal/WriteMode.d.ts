import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WriteMode extends Enum<WriteMode> {
    static LIST: WriteMode;
    static MAP: WriteMode;
    static OBJ: WriteMode;
    static POLY_OBJ: WriteMode;
    static getEntries(): WriteMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WriteMode;
    static values(): WriteMode[];
    private constructor(begin: string, end: string)
    begin: string;
    end: string;
    name(): "OBJ" | "LIST" | "MAP" | "POLY_OBJ";
}