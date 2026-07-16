import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefURLRequest$Status extends Enum<CefURLRequest$Status> {
    static UR_CANCELED: CefURLRequest$Status;
    static UR_FAILED: CefURLRequest$Status;
    static UR_IO_PENDING: CefURLRequest$Status;
    static UR_SUCCESS: CefURLRequest$Status;
    static UR_UNKNOWN: CefURLRequest$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefURLRequest$Status;
    static values(): CefURLRequest$Status[];
    private constructor()
    name(): "UR_UNKNOWN" | "UR_SUCCESS" | "UR_IO_PENDING" | "UR_CANCELED" | "UR_FAILED";
}