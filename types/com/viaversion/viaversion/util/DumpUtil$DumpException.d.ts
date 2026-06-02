import type { DumpUtil$DumpErrorType } from '../../../../com/viaversion/viaversion/util/DumpUtil$DumpErrorType.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DumpUtil$DumpException extends RuntimeException {
    private constructor(arg0: DumpUtil$DumpErrorType)
    private constructor(arg0: DumpUtil$DumpErrorType, arg1: Throwable)
    // private errorType: DumpUtil$DumpErrorType;
    errorType(): DumpUtil$DumpErrorType;
}