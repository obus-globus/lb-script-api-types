import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2Exception$ShutdownHint extends Enum<Http2Exception$ShutdownHint> {
    static GRACEFUL_SHUTDOWN: Http2Exception$ShutdownHint;
    static HARD_SHUTDOWN: Http2Exception$ShutdownHint;
    static NO_SHUTDOWN: Http2Exception$ShutdownHint;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2Exception$ShutdownHint;
    static values(): Http2Exception$ShutdownHint[];
    private constructor()
    name(): "NO_SHUTDOWN" | "GRACEFUL_SHUTDOWN" | "HARD_SHUTDOWN";
}