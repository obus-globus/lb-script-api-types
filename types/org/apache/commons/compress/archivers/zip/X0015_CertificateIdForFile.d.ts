import type { PKWareExtraHeader } from '../../../../../../org/apache/commons/compress/archivers/zip/PKWareExtraHeader.d.ts'
import type { PKWareExtraHeader$HashAlgorithm } from '../../../../../../org/apache/commons/compress/archivers/zip/PKWareExtraHeader$HashAlgorithm.d.ts'
export class X0015_CertificateIdForFile extends PKWareExtraHeader {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    // private hashAlg: PKWareExtraHeader$HashAlgorithm;
    // private rcount: number;
    getHashAlgorithm(): PKWareExtraHeader$HashAlgorithm;
    getRecordCount(): number;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
}