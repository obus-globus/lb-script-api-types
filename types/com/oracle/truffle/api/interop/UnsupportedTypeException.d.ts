import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UnsupportedTypeException extends InteropException {
    static create(paramsuppliedValues: (Object | null)[]): UnsupportedTypeException;
    static create(paramsuppliedValues: (Object | null)[], paramhint: string): UnsupportedTypeException;
    static create(paramsuppliedValues: (Object | null)[], paramhint: string, paramcause: Throwable): UnsupportedTypeException;
    private constructor(message: string, suppliedValues: Object[])
    private constructor(message: string, suppliedValues: Object[], cause: Throwable)
    readonly suppliedValues: Object[];
    getSuppliedValues(): Object[];
}