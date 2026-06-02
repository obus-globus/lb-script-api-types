import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export abstract class AbstractEncodingDetectorParser extends Object implements Parser {
    constructor()
    constructor(arg0: EncodingDetector)
    readonly encodingDetector: EncodingDetector;
    getEncodingDetector(): EncodingDetector;
    getEncodingDetector(arg0: ParseContext): EncodingDetector;
    setEncodingDetector(arg0: EncodingDetector): void;
}