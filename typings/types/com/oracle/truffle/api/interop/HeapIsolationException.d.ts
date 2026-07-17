import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class HeapIsolationException extends InteropException {
    static create(): HeapIsolationException;
    static create(paramcause: Throwable): HeapIsolationException;
    private constructor()
    private constructor(cause: Throwable)
    readonly message: string | null;
}