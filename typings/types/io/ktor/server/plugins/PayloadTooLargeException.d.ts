import type { ContentTransformationException } from '../../../../io/ktor/server/plugins/ContentTransformationException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class PayloadTooLargeException extends ContentTransformationException implements CopyableThrowable<PayloadTooLargeException> {
    constructor(sizeLimit: number)
    // private sizeLimit: number;
    createCopy(): PayloadTooLargeException;
}