import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotContextImpl$State extends Enum<PolyglotContextImpl$State> {
    static CANCELLING: PolyglotContextImpl$State;
    static CLOSED: PolyglotContextImpl$State;
    static CLOSED_CANCELLED: PolyglotContextImpl$State;
    static CLOSED_EXITED: PolyglotContextImpl$State;
    static CLOSED_INTERRUPTED: PolyglotContextImpl$State;
    static CLOSING: PolyglotContextImpl$State;
    static CLOSING_CANCELLING: PolyglotContextImpl$State;
    static CLOSING_EXITING: PolyglotContextImpl$State;
    static CLOSING_FINALIZING: PolyglotContextImpl$State;
    static CLOSING_INTERRUPTING: PolyglotContextImpl$State;
    static CLOSING_INTERRUPTING_FINALIZING: PolyglotContextImpl$State;
    static CLOSING_PENDING_EXIT: PolyglotContextImpl$State;
    static DEFAULT: PolyglotContextImpl$State;
    static EXITING: PolyglotContextImpl$State;
    static INTERRUPTING: PolyglotContextImpl$State;
    static PENDING_EXIT: PolyglotContextImpl$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotContextImpl$State;
    static values(): PolyglotContextImpl$State[];
    private constructor()
    isCancelled(): boolean;
    isCancelling(): boolean;
    isClosed(): boolean;
    isClosing(): boolean;
    isExiting(): boolean;
    isInterrupting(): boolean;
    isInvalidOrClosed(): boolean;
    // private shouldCacheThreadInfo(): boolean;
    name(): "DEFAULT" | "INTERRUPTING" | "PENDING_EXIT" | "EXITING" | "CANCELLING" | "CLOSING" | "CLOSING_PENDING_EXIT" | "CLOSING_FINALIZING" | "CLOSING_INTERRUPTING" | "CLOSING_INTERRUPTING_FINALIZING" | "CLOSING_CANCELLING" | "CLOSING_EXITING" | "CLOSED" | "CLOSED_INTERRUPTED" | "CLOSED_CANCELLED" | "CLOSED_EXITED";
}