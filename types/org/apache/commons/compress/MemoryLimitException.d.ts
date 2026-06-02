import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CompressException } from '../../../../org/apache/commons/compress/CompressException.d.ts'
export class MemoryLimitException extends CompressException {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Exception)
    constructor(arg0: number, arg1: number, arg2: Throwable)
    // private memoryLimitKiB: number;
    // private memoryNeededKiB: number;
    getMemoryLimitInKb(): number;
    getMemoryNeededInKb(): number;
}