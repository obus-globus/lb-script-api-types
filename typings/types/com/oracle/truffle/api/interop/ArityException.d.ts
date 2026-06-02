import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ArityException extends InteropException {
    static create(paramexpectedMinArity: number, paramexpectedMaxArity: number, paramactualArity: number): ArityException;
    static create(paramexpectedMinArity: number, paramexpectedMaxArity: number, paramactualArity: number, paramcause: Throwable): ArityException;
    private constructor(expectedMinArity: number, expectedMaxArity: number, actualArity: number, cause: Throwable)
    readonly actualArity: number;
    readonly expectedMaxArity: number;
    readonly expectedMinArity: number;
    readonly message: string | null;
    getActualArity(): number;
    getExpectedMaxArity(): number;
    getExpectedMinArity(): number;
}