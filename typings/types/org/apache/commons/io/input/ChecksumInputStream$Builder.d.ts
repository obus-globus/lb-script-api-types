import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { ChecksumInputStream } from '../../../../../org/apache/commons/io/input/ChecksumInputStream.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export class ChecksumInputStream$Builder extends ProxyInputStream$AbstractBuilder<ChecksumInputStream, ChecksumInputStream$Builder> {
    constructor()
    // private checksum: Checksum;
    // private countThreshold: number;
    // private expectedChecksumValue: number;
    get(): ChecksumInputStream;
    setChecksum(arg0: Checksum): ChecksumInputStream$Builder;
    setCountThreshold(arg0: number): ChecksumInputStream$Builder;
    setExpectedChecksumValue(arg0: number): ChecksumInputStream$Builder;
}