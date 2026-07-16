import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveException } from '../../../../../org/apache/commons/compress/archivers/ArchiveException.d.ts'
export class StreamingNotSupportedException extends ArchiveException {
    static requireNonNull<T extends unknown>(paramarg0: T, paramarg1: () => string): T;
    constructor(arg0: string)
    readonly format: string;
    getFormat(): string;
}