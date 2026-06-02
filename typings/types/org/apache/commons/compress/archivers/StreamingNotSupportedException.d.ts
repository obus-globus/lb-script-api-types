import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveException } from '../../../../../org/apache/commons/compress/archivers/ArchiveException.d.ts'
export class StreamingNotSupportedException extends ArchiveException {
    static requireNonNull(paramarg0: Object | null, paramarg1: () => string): Object | null;
    constructor(arg0: string)
    readonly format: string;
    getFormat(): string;
}