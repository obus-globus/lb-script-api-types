import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class ExcludedTypeGsonException extends Exception implements CopyableThrowable<ExcludedTypeGsonException> {
    constructor(type: KClass<Object>)
    // private type: KClass<Object>;
    createCopy(): ExcludedTypeGsonException;
}