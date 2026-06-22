import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export abstract class AbstractEncodingDetectorParser extends Object implements Parser {
    constructor()
    constructor(arg0: EncodingDetector)
    readonly encodingDetector: EncodingDetector;
    getEncodingDetector(): EncodingDetector;
    getEncodingDetector(arg0: ParseContext): EncodingDetector;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    setEncodingDetector(arg0: EncodingDetector): void;
}