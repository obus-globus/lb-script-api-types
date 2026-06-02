import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UnsupportedMessageException extends InteropException {
    static create(): UnsupportedMessageException;
    static create(paramcause: Throwable): UnsupportedMessageException;
    private constructor()
    private constructor(cause: Throwable)
    readonly message: string | null;
}