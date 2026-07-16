import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
export class NormalizedParameters extends Object {
    static getThrowableCandidate(paramarg0: Object[]): Throwable;
    static normalize(paramarg0: string, paramarg1: Object[], paramarg2: Throwable): NormalizedParameters;
    static normalize(paramarg0: LoggingEvent): NormalizedParameters;
    static trimmedCopy(paramarg0: Object[]): Object[];
    constructor(arg0: string, arg1: Object[])
    constructor(arg0: string, arg1: Object[], arg2: Throwable)
    readonly arguments: Object[];
    readonly message: string;
    readonly throwable: Throwable;
    getArguments(): Object[];
    getMessage(): string;
    getThrowable(): Throwable;
}