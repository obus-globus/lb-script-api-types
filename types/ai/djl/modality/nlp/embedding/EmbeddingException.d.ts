import type { TranslateException } from '../../../../../ai/djl/translate/TranslateException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class EmbeddingException extends TranslateException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}