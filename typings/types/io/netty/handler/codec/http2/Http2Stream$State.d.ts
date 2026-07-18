import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Http2Stream$State extends Enum<Http2Stream$State> {
    static CLOSED: Http2Stream$State;
    static HALF_CLOSED_LOCAL: Http2Stream$State;
    static HALF_CLOSED_REMOTE: Http2Stream$State;
    static IDLE: Http2Stream$State;
    static OPEN: Http2Stream$State;
    static RESERVED_LOCAL: Http2Stream$State;
    static RESERVED_REMOTE: Http2Stream$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Http2Stream$State;
    static values(): Http2Stream$State[];
    private constructor(arg2: boolean, arg3: boolean)
    // private localSideOpen: boolean;
    // private remoteSideOpen: boolean;
    localSideOpen(): boolean;
    remoteSideOpen(): boolean;
    name(): "IDLE" | "RESERVED_LOCAL" | "RESERVED_REMOTE" | "OPEN" | "HALF_CLOSED_LOCAL" | "HALF_CLOSED_REMOTE" | "CLOSED";
}