import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { ChecksumInputStream$Builder } from '../../../../../org/apache/commons/io/input/ChecksumInputStream$Builder.d.ts'
import type { CountingInputStream } from '../../../../../org/apache/commons/io/input/CountingInputStream.d.ts'
export class ChecksumInputStream extends CountingInputStream {
    static builder(): ChecksumInputStream$Builder;
    static nullInputStream(): InputStream;
    private constructor(arg0: ChecksumInputStream$Builder)
    // private countThreshold: number;
    // private expectedChecksumValue: number;
    afterRead(arg0: number): void;
    // private getChecksum(): Checksum;
    getRemaining(): number;
}