import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ArchiveException } from '../../../../../../org/apache/commons/compress/archivers/ArchiveException.d.ts'
export class DumpArchiveException extends ArchiveException {
    static requireNonNull(paramarg0: Object | null, paramarg1: () => string): Object | null;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}