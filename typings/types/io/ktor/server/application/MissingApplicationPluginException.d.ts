import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class MissingApplicationPluginException extends IllegalStateException implements CopyableThrowable<MissingApplicationPluginException> {
    constructor(key: AttributeKey<Object>)
    readonly key: AttributeKey<Object>;
    readonly message: string;
    createCopy(): MissingApplicationPluginException;
}