import type { ZipException } from '../../../../../../java/util/zip/ZipException.d.ts'
import type { UnsupportedZipFeatureException$Feature } from '../../../../../../org/apache/commons/compress/archivers/zip/UnsupportedZipFeatureException$Feature.d.ts'
import type { ZipArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry.d.ts'
import type { ZipMethod } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipMethod.d.ts'
export class UnsupportedZipFeatureException extends ZipException {
    constructor(arg0: UnsupportedZipFeatureException$Feature)
    constructor(arg0: UnsupportedZipFeatureException$Feature, arg1: ZipArchiveEntry)
    constructor(arg0: ZipMethod, arg1: ZipArchiveEntry)
    readonly entry: ZipArchiveEntry;
    // private reason: UnsupportedZipFeatureException$Feature;
    getEntry(): ZipArchiveEntry;
    getFeature(): UnsupportedZipFeatureException$Feature;
}