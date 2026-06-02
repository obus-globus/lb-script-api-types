import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { IllegalAccessException } from '../../../java/lang/IllegalAccessException.d.ts'
export class IllegalCallableAccessException extends Exception implements Serializable {
    constructor(cause: IllegalAccessException)
}