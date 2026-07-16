import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../../java/net/URLConnection.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { BOMInputStream } from '../../../../../org/apache/commons/io/input/BOMInputStream.d.ts'
import type { XmlStreamReader$Builder } from '../../../../../org/apache/commons/io/input/XmlStreamReader$Builder.d.ts'
import type { XmlStreamReaderException } from '../../../../../org/apache/commons/io/input/XmlStreamReaderException.d.ts'
export class XmlStreamReader extends Reader {
    static ENCODING_PATTERN: Pattern;
    static builder(): XmlStreamReader$Builder;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: File)
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: string)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: InputStream, arg1: string, arg2: boolean)
    constructor(arg0: InputStream, arg1: string, arg2: boolean, arg3: string)
    constructor(arg0: URL)
    constructor(arg0: URLConnection, arg1: string)
    constructor(arg0: Path)
    readonly defaultEncoding: string;
    readonly encoding: string;
    // private reader: Reader;
    calculateHttpEncoding(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: string): string;
    calculateRawEncoding(arg0: string, arg1: string, arg2: string): string;
    close(): void;
    // private doLenientDetection(arg0: string, arg1: XmlStreamReaderException): string;
    getDefaultEncoding(): string;
    getEncoding(): string;
    // private processHttpStream(arg0: BOMInputStream, arg1: BOMInputStream, arg2: boolean): string;
    // private processHttpStream(arg0: BOMInputStream, arg1: BOMInputStream, arg2: boolean, arg3: string): string;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}