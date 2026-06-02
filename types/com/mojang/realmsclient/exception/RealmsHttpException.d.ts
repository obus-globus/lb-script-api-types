import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class RealmsHttpException extends RuntimeException {
    constructor(s: string, e: Exception)
}