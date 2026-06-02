import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class InvalidArrayIndexException extends InteropException {
    static create(paraminvalidIndex: number): InvalidArrayIndexException;
    static create(paraminvalidIndex: number, paramcause: Throwable): InvalidArrayIndexException;
    private constructor(invalidIndex: number)
    private constructor(invalidIndex: number, cause: Throwable)
    readonly invalidIndex: number;
    readonly message: string | null;
    getInvalidIndex(): number;
}