import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { ZipFile } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipFile.d.ts'
import type { AbstractStreamBuilder } from '../../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { IOFunction } from '../../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export class ZipFile$Builder extends AbstractStreamBuilder<ZipFile, ZipFile$Builder> {
    constructor()
    // private ignoreLocalFileHeader: boolean;
    // private maxNumberOfDisks: number;
    // private seekableByteChannel: SeekableByteChannel;
    // private useUnicodeExtraFields: boolean;
    // private zstdInputStreamFactory: (param0: InputStream) => InputStream;
    get(): ZipFile;
    setIgnoreLocalFileHeader(arg0: boolean): ZipFile$Builder;
    setMaxNumberOfDisks(arg0: number): ZipFile$Builder;
    setSeekableByteChannel(arg0: SeekableByteChannel): ZipFile$Builder;
    setUseUnicodeExtraFields(arg0: boolean): ZipFile$Builder;
    setZstdInputStreamFactory(arg0: (param0: InputStream) => InputStream): ZipFile$Builder;
}