import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class ComplexDataException extends RuntimeException {
    static INSTANCE: RuntimeException;
    private constructor()
    fillInStackTrace(): Throwable;
}