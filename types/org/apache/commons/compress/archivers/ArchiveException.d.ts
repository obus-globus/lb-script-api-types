import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CompressException } from '../../../../../org/apache/commons/compress/CompressException.d.ts'
export class ArchiveException extends CompressException {
    static requireNonNull(paramarg0: Object | null, paramarg1: () => string): Object | null;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Exception)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}