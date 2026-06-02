import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { ExceptionContext } from '../../../../../org/apache/commons/lang3/exception/ExceptionContext.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class ContextedException extends Exception implements ExceptionContext {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: Throwable, arg2: ExceptionContext)
    constructor(arg0: Throwable)
    // private exceptionContext: ExceptionContext;
    readonly message: string | null;
    addContextValue(arg0: string, arg1: Object): ContextedException;
    getContextEntries(): Pair<string, Object>[];
    getContextLabels(): string[];
    getContextValues(arg0: string): Object[];
    getFirstContextValue(arg0: string): Object;
    getFormattedExceptionMessage(arg0: string): string;
    getRawMessage(): string;
    setContextValue(arg0: string, arg1: Object): ContextedException;
}