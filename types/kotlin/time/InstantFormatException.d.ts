import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { IllegalArgumentException } from '../../java/lang/IllegalArgumentException.d.ts'
export class InstantFormatException extends IllegalArgumentException implements Serializable {
    constructor(message: string)
}