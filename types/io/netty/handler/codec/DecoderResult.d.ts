import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DecoderResult extends Object {
    static SUCCESS: DecoderResult;
    static UNFINISHED: DecoderResult;
    static failure(paramarg0: Throwable): DecoderResult;
    constructor(arg0: Throwable)
    // private cause: Throwable;
    cause(): Throwable;
    isFailure(): boolean;
    isFinished(): boolean;
    isSuccess(): boolean;
    toString(): string;
}