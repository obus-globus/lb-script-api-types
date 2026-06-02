import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class TransformationException extends RuntimeException {
    static supplier(paramarg0: string): () => TransformationException;
    static thrower(paramarg0: string): () => void;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}