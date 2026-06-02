import type { PKWareExtraHeader } from '../../../../../../org/apache/commons/compress/archivers/zip/PKWareExtraHeader.d.ts'
import type { PKWareExtraHeader$EncryptionAlgorithm } from '../../../../../../org/apache/commons/compress/archivers/zip/PKWareExtraHeader$EncryptionAlgorithm.d.ts'
import type { PKWareExtraHeader$HashAlgorithm } from '../../../../../../org/apache/commons/compress/archivers/zip/PKWareExtraHeader$HashAlgorithm.d.ts'
export class X0017_StrongEncryptionHeader extends PKWareExtraHeader {
    static EXTRAFIELD_HEADER_SIZE: number;
    constructor()
    // private algId: PKWareExtraHeader$EncryptionAlgorithm;
    // private bitlen: number;
    // private erdData: number[];
    // private flags: number;
    // private format: number;
    // private hashAlg: PKWareExtraHeader$HashAlgorithm;
    // private hashSize: number;
    // private ivData: number[];
    // private keyBlob: number[];
    // private rcount: number;
    // private recipientKeyHash: number[];
    // private vCRC32: number[];
    // private vData: number[];
    // private assertDynamicLengthFits(arg0: string, arg1: number, arg2: number, arg3: number): void;
    getEncryptionAlgorithm(): PKWareExtraHeader$EncryptionAlgorithm;
    getHashAlgorithm(): PKWareExtraHeader$HashAlgorithm;
    getRecordCount(): number;
    parseCentralDirectoryFormat(arg0: number[], arg1: number, arg2: number): void;
    parseFileFormat(arg0: number[], arg1: number, arg2: number): void;
    parseFromCentralDirectoryData(arg0: number[], arg1: number, arg2: number): void;
    parseFromLocalFileData(arg0: number[], arg1: number, arg2: number): void;
}