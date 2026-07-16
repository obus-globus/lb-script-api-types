import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DumpUtil$DumpErrorType extends Enum<DumpUtil$DumpErrorType> {
    static CONNECTION: DumpUtil$DumpErrorType;
    static POST: DumpUtil$DumpErrorType;
    static RATE_LIMITED: DumpUtil$DumpErrorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumpUtil$DumpErrorType;
    static values(): DumpUtil$DumpErrorType[];
    private constructor(arg2: string)
    // private message: string;
    message(): string;
    name(): "CONNECTION" | "RATE_LIMITED" | "POST";
}