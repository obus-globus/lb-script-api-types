import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
export class ReadAfterEOFException extends RuntimeException implements Serializable {
    constructor(message: string | null)
}