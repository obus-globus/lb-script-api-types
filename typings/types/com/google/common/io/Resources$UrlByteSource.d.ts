import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Resources$UrlByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: Iterator<ByteSource>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(arg0: URL, arg1: LineProcessor<string[]>)
    // private url: URL;
    openStream(): InputStream;
    toString(): string;
}