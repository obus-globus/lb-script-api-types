import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TruffleString$ErrorHandling extends Enum<TruffleString$ErrorHandling> {
    static BEST_EFFORT: TruffleString$ErrorHandling;
    static RETURN_NEGATIVE: TruffleString$ErrorHandling;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleString$ErrorHandling;
    static values(): TruffleString$ErrorHandling[];
    private constructor(errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result)
    // private errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result;
    name(): "BEST_EFFORT" | "RETURN_NEGATIVE";
}