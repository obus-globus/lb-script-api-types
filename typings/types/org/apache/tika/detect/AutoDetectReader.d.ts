import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { LoadErrorHandler } from '../../../../org/apache/tika/config/LoadErrorHandler.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { InputSource } from '../../../../org/xml/sax/InputSource.d.ts'
export class AutoDetectReader extends BufferedReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: InputStream)
    private constructor(arg0: InputStream, arg1: Charset)
    constructor(arg0: InputStream, arg1: Metadata)
    constructor(arg0: InputStream, arg1: Metadata, arg2: ServiceLoader)
    constructor(arg0: InputStream, arg1: Metadata, arg2: EncodingDetector)
    private constructor(arg0: InputStream, arg1: Metadata, arg2: EncodingDetector, arg3: LoadErrorHandler)
    readonly charset: Charset;
    asInputSource(): InputSource;
    getCharset(): Charset;
}