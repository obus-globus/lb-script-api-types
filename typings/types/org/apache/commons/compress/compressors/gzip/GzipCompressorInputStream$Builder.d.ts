import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { GzipCompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/gzip/GzipCompressorInputStream.d.ts'
import type { AbstractStreamBuilder } from '../../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { IOConsumer } from '../../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
export class GzipCompressorInputStream$Builder extends AbstractStreamBuilder<GzipCompressorInputStream, GzipCompressorInputStream$Builder> {
    constructor()
    // private decompressConcatenated: boolean;
    // private fileNameCharset: Charset;
    // private onMemberEnd: (param0: GzipCompressorInputStream) => void;
    // private onMemberStart: (param0: GzipCompressorInputStream) => void;
    get(): GzipCompressorInputStream;
    setDecompressConcatenated(arg0: boolean): GzipCompressorInputStream$Builder;
    setFileNameCharset(arg0: Charset): GzipCompressorInputStream$Builder;
    setOnMemberEnd(arg0: (param0: GzipCompressorInputStream) => void): GzipCompressorInputStream$Builder;
    setOnMemberStart(arg0: (param0: GzipCompressorInputStream) => void): GzipCompressorInputStream$Builder;
}