import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
import type { BoundedInputStream$Builder } from '../../../../../../org/apache/commons/io/input/BoundedInputStream$Builder.d.ts'
export class ZipFile$StoredStatisticsStream extends BoundedInputStream implements InputStreamStatistics {
    static builder(): BoundedInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    getCompressedCount(): number;
    getUncompressedCount(): number;
}