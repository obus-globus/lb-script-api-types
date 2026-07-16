import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DumpArchiveException } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveException.d.ts'
export class UnrecognizedFormatException extends DumpArchiveException {
    static requireNonNull<T extends unknown>(paramarg0: T, paramarg1: () => string): T;
    constructor()
}