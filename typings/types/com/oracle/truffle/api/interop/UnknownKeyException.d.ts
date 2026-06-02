import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UnknownKeyException extends InteropException {
    static create(paramunknownKey: Object): UnknownKeyException;
    static create(paramunknownKey: Object, paramcause: Throwable): UnknownKeyException;
    private constructor(unknownKey: Object)
    private constructor(unknownKey: Object, cause: Throwable)
    readonly message: string | null;
    readonly unknownKey: Object;
    getUnknownKey(): Object;
}