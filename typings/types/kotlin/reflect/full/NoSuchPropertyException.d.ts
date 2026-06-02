import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
export class NoSuchPropertyException extends Exception implements Serializable {
    constructor(cause: Exception | null)
}