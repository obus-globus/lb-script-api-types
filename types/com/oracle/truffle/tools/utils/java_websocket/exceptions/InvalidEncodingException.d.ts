import type { UnsupportedEncodingException } from '../../../../../../../java/io/UnsupportedEncodingException.d.ts'
import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
export class InvalidEncodingException extends RuntimeException {
    constructor(arg0: UnsupportedEncodingException)
    readonly encodingException: UnsupportedEncodingException;
    getEncodingException(): UnsupportedEncodingException;
}