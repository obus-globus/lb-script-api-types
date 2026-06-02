import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UnknownIdentifierException extends InteropException {
    static create(paramunknownIdentifier: string): UnknownIdentifierException;
    static create(paramunknownIdentifier: string, paramcause: Throwable): UnknownIdentifierException;
    private constructor(unknownIdentifier: string)
    private constructor(unknownIdentifier: string, cause: Throwable)
    readonly message: string | null;
    readonly unknownIdentifier: string;
    getUnknownIdentifier(): string;
}