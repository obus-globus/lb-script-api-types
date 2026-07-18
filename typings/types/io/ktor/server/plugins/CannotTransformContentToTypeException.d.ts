import type { ContentTransformationException } from '../../../../io/ktor/server/plugins/ContentTransformationException.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class CannotTransformContentToTypeException extends ContentTransformationException implements CopyableThrowable<CannotTransformContentToTypeException> {
    constructor(type: KType)
    // private type: KType;
    createCopy(): CannotTransformContentToTypeException;
}