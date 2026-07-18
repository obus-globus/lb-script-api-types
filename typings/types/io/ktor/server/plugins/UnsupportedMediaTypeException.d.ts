import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { ContentTransformationException } from '../../../../io/ktor/server/plugins/ContentTransformationException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class UnsupportedMediaTypeException extends ContentTransformationException implements CopyableThrowable<UnsupportedMediaTypeException> {
    constructor(contentType: ContentType | null)
    // private contentType: ContentType | null;
    createCopy(): UnsupportedMediaTypeException;
}