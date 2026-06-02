import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ParseCancellationException } from '../../../../../org/antlr/v4/runtime/misc/ParseCancellationException.d.ts'
export class ParsingException extends RuntimeException {
    static extractParseCancellationException(paramarg0: RuntimeException): ParseCancellationException;
    static supplier(paramarg0: string): () => ParsingException;
    static thrower(paramarg0: string): () => void;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: ParseCancellationException)
    constructor(arg0: ParseCancellationException)
    readonly cause: ParseCancellationException | null;
}