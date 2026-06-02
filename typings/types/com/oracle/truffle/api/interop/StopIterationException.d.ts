import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class StopIterationException extends InteropException {
    static create(): StopIterationException;
    static create(paramcause: Throwable): StopIterationException;
    private constructor()
    private constructor(cause: Throwable)
    readonly message: string | null;
}